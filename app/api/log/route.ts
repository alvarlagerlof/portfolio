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
  console.log(text);

  try {
    await fetch(
      `http://localhost:8123/?user=${process.env.CLICKHOUSE_USER}&password=${process.env.CLICKHOUSE_PASSWORD}`,
      {
        method: "POST",
        body: `INSERT INTO vercel_log FORMAT JSONEachRow
    ${text}`,
      }
    );

    return new Response(null, {
      status: 200,
      headers: {
        "x-vercel-verify": process.env.LOG_DRAIN_VERCEL_VERIFY,
      },
    });
  } catch (error) {
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

}
