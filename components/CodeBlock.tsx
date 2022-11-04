"use client";

import { PrismAsync as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkCold as style } from "react-syntax-highlighter/dist/cjs/styles/prism";

export function CodeBlock({ language, code }) {
  return (
    <SyntaxHighlighter
      customStyle={{
        borderRadius: "0px",
        padding: "16px",
        fontFamily: "unset",
        fontSize: "0.9em",
        width: "100%",
      }}
      style={style}
      language={language}
    >
      {code}
    </SyntaxHighlighter>
  );
}
