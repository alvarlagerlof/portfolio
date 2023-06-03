// const crypto = require("crypto");
// const { json } = require("micro");

const isPlainObject = obj =>
  obj.constructor === Object && Object.getPrototypeOf(obj) === Object.prototype;

export async function POST(request: Request) {
  if (
    !process.env.CLICKHOUSE_USER ||
    !process.env.CLICKHOUSE_PASSWORD ||
    !process.env.LOG_DRAIN_VERCEL_VERIFY
  ) {
    return new Response(null, {
      status: 500,
    });
  }

  //   if (!process.env.LOG_DRAIN_SECRET) {
  //     return new Response(null, {
  //       status: 500,
  //     });
  //   }

  //   const payload = await json(request);
  //   const signature = crypto
  //     .createHmac("sha1", process.env.LOG_DRAIN_SECRET)
  //     .update(payload)
  //     .digest("hex");
  //   if (signature !== request.headers["x-vercel-signature"]) {
  //     return new Response("Unauthorized", {
  //       status: 403,
  //     });
  //   }

  const text = await request.text();
  const lines = text.split("\\n");

  try {
    const sql = "INSERT INTO vercel_log FORMAT JSONEachRow";

    const formattedLines: string[] = [];

    for (const line of lines) {
      const cleanedLine = line.replaceAll("\t", "    ");
      try {
        const json = JSON.parse(cleanedLine) as unknown;

        if (!isPlainObject(json)) {
          console.log("LINE ERROR", "Not an object", cleanedLine);
          return;
        }

        formattedLines.push(JSON.stringify({ event: json }));
        console.log("LINE PUSH", line.substring(0, 100));
      } catch (error) {
        console.log("LINE ERROR", error.message, cleanedLine);
      }
    }

    const body = `${sql}\n${formattedLines.join("\n")}`;

    const response = await fetch(
      `https://ai2rwbv3zr.eu-west-1.aws.clickhouse.cloud:8443/?user=${process.env.CLICKHOUSE_USER}&password=${process.env.CLICKHOUSE_PASSWORD}`,
      {
        method: "POST",
        body,
      }
    );

    const responseText = await response.text();

    console.log("RESPONSE OK", response.ok);
    console.log("RESPONSE STATUS", response.status);
    console.log("RESPONSE STATUS TEXT", response.statusText);
    console.log("RESPONSE TEXT", responseText);

    if (!response.ok) {
      return new Response(responseText, {
        status: 500,
        headers: {
          "x-vercel-verify": process.env.LOG_DRAIN_VERCEL_VERIFY,
        },
      });
    }

    return new Response(null, {
      status: 200,
      headers: {
        "x-vercel-verify": process.env.LOG_DRAIN_VERCEL_VERIFY,
      },
    });
  } catch (error) {
    console.error(error);
    if (error instanceof Error) {
      return new Response(error.message, {
        status: 500,
        headers: {
          "x-vercel-verify": process.env.LOG_DRAIN_VERCEL_VERIFY,
        },
      });
    }
  }
  return new Response("Server error", {
    status: 500,
    headers: {
      "x-vercel-verify": process.env.LOG_DRAIN_VERCEL_VERIFY,
    },
  });
}
