export async function GET(request: Request) {
  if (!process.env.LOG_DRAIN_VERCEL_VERIFY) {
    return new Response(null, {
      status: 500,
    });
  }

  console.log(await request.json());

  return new Response(null, {
    status: 200,
    headers: {
      "x-vercel-verify": process.env.LOG_DRAIN_VERCEL_VERIFY,
    },
  });
}
