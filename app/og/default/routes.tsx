import { ImageResponse } from "@vercel/og";
import { Star } from "components/Icons/Star";

export const runtime = "edge";

const spaceTextFont = fetch(
  new URL("../../../assets/fonts/space-text-medium.woff", import.meta.url)
).then(res => res.arrayBuffer());

const madeDillanFont = fetch(
  new URL("../../../assets/fonts/made-dillan.woff", import.meta.url)
).then(res => res.arrayBuffer());

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);

    const title = searchParams.has("title")
      ? searchParams.get("title")?.slice(0, 100)
      : "Alvar Lagerlöf";

    const description = searchParams.has("description")
      ? searchParams.get("description")?.slice(0, 100)
      : "Developer and designer from Stockholm";

    const spaceTextData = await spaceTextFont;
    const madeDillanData = await madeDillanFont;

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
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Star width="50" height="45" />
            {title != "Alvar Lagerlöf" && (
              <h3
                style={{
                  fontFamily: "var(--font-space-text)",
                  fontSize: "45px",
                  fontWeight: "500",
                  color: "#15803d",
                  marginLeft: "24px",
                }}
              >
                Alvar Lagerlöf
              </h3>
            )}
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "2px",
            }}
          >
            <h1 style={{ fontFamily: "MADE Dillan", fontSize: "110px", lineHeight: 1.1 }}>
              {title}
            </h1>
            <h2 style={{ fontFamily: "Space Text", fontSize: "55px", lineHeight: 1.3 }}>
              {description}
            </h2>
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
