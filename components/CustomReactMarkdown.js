import ReactMarkdown from "react-markdown";
import { PrismAsync as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism as style } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { default as NextImage } from "next/image";
import gfm from "remark-gfm";
import ArrowLink from "./ArrowLink";

function Heading({ level, children }) {
  switch (level) {
    case 1:
      return <h3 className="font-subheading font-semibold !text-2xl !md:text-4xl">{children}</h3>;
    case 2:
      return <h4 className="font-subheading font-semibold !text-xl !md:text-3xl">{children}</h4>;
    default:
      return <p>Heading {level} not implemented</p>;
  }
}

function Image({ src, alt }) {
  return (
    <div>
      <NextImage
        unoptimized={true}
        src={src}
        alt={alt}
        loading="lazy"
        width="1000"
        height="600"
        objectFit="cover"
        className="rounded-3xl bordered"
      />
    </div>
  );
}

function Link({ href, children }) {
  return (
    <ArrowLink newTab href={href}>
      {children}
    </ArrowLink>
  );
}

function Blockquote({ children }) {
  return <blockquote className="py-2 px-4  !border-separator flex flex-col">{children}</blockquote>;
}

function Code({ language, value }) {
  return (
    <SyntaxHighlighter
      customStyle={{
        borderRadius: "0px",
        padding: "16px",
        fontFamily: "unset",
        fontSize: "0.9em",
      }}
      style={style}
      language={language}
    >
      {value}
    </SyntaxHighlighter>
  );
}

export default function CustomReactMarkdown({ children }) {
  const renderers = {
    heading: Heading,
    image: Image,
    link: Link,
    blockquote: Blockquote,
    code: Code,
  };

  return (
    <ReactMarkdown plugins={[gfm]} renderers={renderers}>
      {children}
    </ReactMarkdown>
  );
}
