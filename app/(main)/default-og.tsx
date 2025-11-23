import { ImageResponse } from "@vercel/og";
import { OpenGraphImageStar } from "components/OpenGraphImageStar";
import { join } from "node:path";
import { readFile } from "node:fs/promises";

export const getSpaceTextFont = async () => {
  const font = await readFile(join(process.cwd(), "assets/assets/fonts/space-text-medium.woff"));

  return font;
};

export const getMadeDillanFont = async () => {
  const font = await readFile(join(process.cwd(), "assets/assets/fonts/made-dillan.woff"));

  return font;
};

export async function defaultOg(title?: string, description?: string) {
  const adjustedTitle = title ? title.slice(0, 100) : "Alvar Lagerlöf";

  const adjustedDescription = description
    ? description.slice(0, 100)
    : "Developer and designer from Stockholm";

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
          <OpenGraphImageStar />
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
            {adjustedTitle}
          </h1>
          <h2 style={{ fontFamily: "Space Text", fontSize: "55px", lineHeight: 1.3 }}>
            {adjustedDescription}
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
