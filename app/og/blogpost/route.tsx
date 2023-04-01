import { ImageResponse } from "@vercel/og";
import { Star } from "components/Icons/Star";
import { NextRequest } from "next/server";

export const runtime = "edge"

const spaceTextFont = fetch(
  new URL("../../../assets/fonts/space-text-medium.woff", import.meta.url)
).then(res => res.arrayBuffer());

const madeDillanFont = fetch(
  new URL("../../../assets/fonts/made-dillan.woff", import.meta.url)
).then(res => res.arrayBuffer());

export async function GET(req: Request, res) {
  try {
    const { searchParams } = new URL(req.url);

    if (!searchParams.has("title") || !searchParams.has("description")) {
      res.redirect(200, "/og/default");
    }

    const title = searchParams.get("title")?.slice(0, 100);
    const description = searchParams.get("description")?.slice(0, 100);

    const spaceTextData = await spaceTextFont;
    const madeDillanData = await madeDillanFont;

    const imgUrl = `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/profile.png`;

    return new ImageResponse(
      (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            background: "#dcfce7",
            padding: "70px 96px",
            justifyContent: "space-between",
            width: "100%",
            height: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <h1
              style={{
                fontFamily: "MADE Dillan",
                fontSize: "90px",
                lineHeight: 1,
                marginBottom: "8px",
              }}
            >
              {title}
            </h1>
            <h2 style={{ fontFamily: "Space Text", fontSize: "45px", lineHeight: 1.4 }}>
              {description}
            </h2>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={imgUrl}
                width="65px"
                height="65px"
                style={{
                  borderRadius: "50%",
                }}
                alt=""
              />
              <h3
                style={{
                  fontFamily: "var(--font-space-text)",
                  fontSize: "45px",
                  fontWeight: "500",
                  color: "#15803d",
                  marginLeft: "24px",
                }}
              >
                By Alvar Lagerlöf
              </h3>
            </div>
            <Star width="50" height="45" />
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: "Space Text",
            data: spaceTextData,
            style: "normal",
          },
          {
            name: "MADE Dillan",
            data: madeDillanData,
            style: "normal",
          },
        ],
      }
    );
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
