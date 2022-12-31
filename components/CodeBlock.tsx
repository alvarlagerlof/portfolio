// "use client";

import Syntax from "react-syntax-highlighter/dist/esm/default-highlight";
// import coldarkCold from "react-syntax-highlighter/dist/cjs/styles/prism/coldark-dark";

export function CodeBlock({ language, code }) {
  return (
    <Syntax
      customStyle={{
        borderRadius: "0px",
        padding: "16px",
        fontFamily: "unset",
        fontSize: "0.9em",
        width: "100%",
      }}
      // style={coldarkCold}
      language={language}
    >
      {code}
    </Syntax>
  );
}
