import ReactMarkdown from "react-markdown";
import { PrismAsync as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism as style } from "react-syntax-highlighter/dist/cjs/styles/prism";
import Image from "next/image";
import gfm from "remark-gfm";
import ArrowLink from "./ArrowLink";

export default function CustomReactMarkdown({ children }) {
  const renderers = {
    heading: ({ level, children }) => {
      switch (level) {
        case 1:
          return (
            <h3 className="font-subheading font-semibold text-2xl md:text-4xl mt-8 mb-2">
              {children}
            </h3>
          );
        case 2:
          return (
            <h4 className="font-subheading font-semibold text-xl md:text-3xl mt-8 mb-2">
              {children}
            </h4>
          );
        case 3:
          return (
            <h5 className="font-subheading font-semibold md:text-2xl mt-8 mb-2">{children}</h5>
          );
        default:
          return <p>Heading {level} not implemented</p>;
      }
    },
    paragraph: ({ children }) => {
      return <p className="mb-8">{children}</p>;
    },
    list: ({ ordered, children }) => {
      if (!ordered) {
        return <ul className="list-disc ml-4 space-y-2 my-4">{children}</ul>;
      }
      if (ordered) {
        return <ol className="list-decimal ml-4 space-y-2 my-4">{children}</ol>;
      }
    },
    image: ({ src, alt }) => {
      return (
        <div className="my-12">
          <Image
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
    },
    link: ({ href, children }) => (
      <ArrowLink newTab href={href}>
        {children}
      </ArrowLink>
    ),
    blockquote: ({ children }) => {
      return (
        <blockquote className="py-2 px-4 border-l-[3px] border-separator flex flex-col mb-8">
          {children}
        </blockquote>
      );
    },
    code: ({ language, value, ...rest }) => {
      console.log(rest);
      return (
        <SyntaxHighlighter
          customStyle={{
            marginTop: "16px",
            marginBottom: "32px",
            borderRadius: "8px",
            padding: "16px",
            fontFamily: "unset",
            fontSize: "0.9em",
          }}
          style={style}
          language={language}
          children={value}
        />
      );
    },
  };

  return (
    <ReactMarkdown plugins={[gfm]} renderers={renderers}>
      {children}
    </ReactMarkdown>
  );
}
