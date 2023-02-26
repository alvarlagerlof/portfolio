import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";

export const config = {
  runtime: "edge",
};

const spaceTextFont = fetch(
  new URL("../../../assets/fonts/space-text-medium.woff", import.meta.url)
).then(res => res.arrayBuffer());

const madeDillanFont = fetch(
  new URL("../../../assets/fonts/made-dillan.woff", import.meta.url)
).then(res => res.arrayBuffer());

export default async function handler(req: NextRequest) {
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

function Star(props) {
  return (
    <svg
      width="30"
      height="26"
      viewBox="0 0 30 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clip-path="url(#clip0)">
        <path
          d="M13.3687 1.29975C14.1659 0.175903 15.8341 0.175906 16.6313 1.29975L18.5934 4.06593C18.9971 4.63499 19.6681 4.95257 20.3641 4.90395L23.7952 4.66425C25.2027 4.56592 26.2668 5.91679 25.8415 7.26217L24.8914 10.2681C24.6715 10.9639 24.8479 11.7243 25.3518 12.252L27.5472 14.5514C28.534 15.585 28.1497 17.2902 26.8149 17.8006L23.7261 18.9816C23.058 19.2371 22.5772 19.8298 22.4651 20.5362L21.956 23.7432C21.7384 25.1142 20.2245 25.852 19.0106 25.1786L15.9701 23.4921C15.3667 23.1574 14.6333 23.1574 14.0299 23.4921L10.9894 25.1786C9.77549 25.852 8.2616 25.1142 8.04398 23.7432L7.53492 20.5362C7.42279 19.8298 6.94198 19.2371 6.27392 18.9816L3.18512 17.8006C1.85027 17.2902 1.46597 15.585 2.45284 14.5514L4.64817 12.252C5.15207 11.7243 5.32854 10.9639 5.10861 10.2681L4.15845 7.26217C3.73319 5.91679 4.79727 4.56592 6.20484 4.66425L9.63592 4.90395C10.3319 4.95257 11.0029 4.63499 11.4066 4.06593L13.3687 1.29975Z"
          fill="#15803D"
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="30" height="26" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
