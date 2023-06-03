import crypto from "crypto";
import arrayBufferToBuffer from "arraybuffer-to-buffer";

export async function GET(request: Request) {
  if (!process.env.INTEGRATION_SECRET || !process.env.LOG_DRAIN_VERCEL_VERIFY) {
    return new Response(null, {
      status: 500,
    });
  }

  const rawBody = await request.arrayBuffer();
  const rawBodyBuffer = arrayBufferToBuffer(rawBody);
  const bodySignature = await sha1(rawBodyBuffer, process.env.INTEGRATION_SECRET);

  if (bodySignature !== request.headers["x-vercel-signature"]) {
    return new Response(
      JSON.stringify({
        code: "invalid_signature",
        error: "signature didn't match",
      }),
      {
        status: 403,
      }
    );
  }

  console.log(rawBody);

  return new Response(null, {
    status: 200,
    headers: {
      "x-vercel-verify": process.env.LOG_DRAIN_VERCEL_VERIFY,
    },
  });
}

async function sha1(data: Buffer, secret: string) {
  return crypto.createHmac("sha1", secret).update(data).digest("hex");
}
