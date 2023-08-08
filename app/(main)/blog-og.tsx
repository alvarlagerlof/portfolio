import { ImageResponse } from "@vercel/og";
// import { getPost } from "./blog/[slug]/getPost";
import { OpenGraphImageStar } from "../../components/OpenGraphImageStar";

const getSpaceTextFont = async () => {
  const response = await fetch(new URL("/assets/fonts/space-text-medium.woff", import.meta.url));
  const interSemiBold = await response.arrayBuffer();

  return interSemiBold;
};

const getMadeDillanFont = async () => {
  const response = await fetch(new URL("/assets/fonts/made-dillan.woff", import.meta.url));
  const interSemiBold = await response.arrayBuffer();

  return interSemiBold;
};

export default async function blogOg(slug: string) {
  //   const { title, description } = await getPost(slug);
  const title = "hej";
  const description = "hej";

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
              src="https://alvar.dev/profile.png"
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
          <OpenGraphImageStar />
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Space Text",
          data: await getSpaceTextFont(),
          style: "normal",
        },
        {
          name: "MADE Dillan",
          data: await getMadeDillanFont(),
          style: "normal",
        },
      ],
    },
  );
}
