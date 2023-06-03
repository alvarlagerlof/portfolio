// const crypto = require("crypto");
// const { json } = require("micro");

export async function POST(request: Request) {
  if (!process.env.LOG_DRAIN_VERCEL_VERIFY) {
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

  console.log(await request.json());

  return new Response(null, {
    status: 200,
    headers: {
      "x-vercel-verify": process.env.LOG_DRAIN_VERCEL_VERIFY,
    },
  });
}
