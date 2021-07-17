import ReactMarkdown from "react-markdown";
import { PrismAsync as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkCold as style } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { default as NextImage } from "next/image";
import gfm from "remark-gfm";

import ArrowLink from "./ArrowLink";
import { Children, WithChildren } from "types";
import { NormalComponent } from "react-markdown/src/ast-to-react";

function H1({ children }: Children) {
  return <h3 className="font-subheading font-semibold !text-2xl !md:text-4xl">{children}</h3>;
}

function H2({ children }: Children) {
  return <h4 className="font-subheading font-semibold !text-xl !md:text-3xl">{children}</h4>;
}

type ImageProps = {
  src: string;
  alt: string;
};

function Image({ src, alt }: ImageProps) {
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

type LinkProps = {
  href: string;
};

function Link({ href, children }: WithChildren<LinkProps>) {
  return (
    <ArrowLink newTab href={href}>
      {children}
    </ArrowLink>
  );
}

function Blockquote({ children }: Children) {
  return <blockquote className="py-2 px-4  !border-separator flex flex-col">{children}</blockquote>;
}

type CodeProps = {
  language: string;
  inline: boolean;
  value: string;
};

function Code({ language, inline, children }: WithChildren<CodeProps>) {
  if (inline) {
    return <pre className="inline-block  px-2 bg-[rgb(227,233,242)]">{children}</pre>;
  }

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
      {children}
    </SyntaxHighlighter>
  );
}

export default function CustomReactMarkdown({ children }) {
  const components = {
    h1: H1,
    h2: H2,
    img: Image,
    a: Link,
    blockquote: Blockquote,
    code: Code,
  };

  return (
    // @ts-ignore
    <ReactMarkdown plugins={[gfm]} components={components}>
      {children}
    </ReactMarkdown>
  );
}
