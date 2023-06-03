// const crypto = require("crypto");
// const { json } = require("micro");

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

    console.log(
      "PREVIEW",
      `${sql}\n${lines.map(line => `{"event":${line.substring(0, 1000)}}`).join("\n")}`
    );

    const body = `${sql}\n${lines.map(line => `{"event":${line}}`).join("\n")}`;

    const response = await fetch(
      `https://ai2rwbv3zr.eu-west-1.aws.clickhouse.cloud:8443/?user=${process.env.CLICKHOUSE_USER}&password=${process.env.CLICKHOUSE_PASSWORD}`,
      {
        method: "POST",
        body,
      }
    );

    console.log("RESPONSE OK", response.ok);
    console.log("RESPONSE STATUS", response.status);
    console.log("RESPONSE STATUS TEXT", response.statusText);

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
