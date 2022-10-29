"use client";

import { PrismAsync as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkCold as style } from "react-syntax-highlighter/dist/cjs/styles/prism";
import ArrowLink from "./ArrowLink";
import NextSanityImage from "./SanityImage";

import { PortableText, PortableTextReactComponents } from "@portabletext/react";

const components: Partial<PortableTextReactComponents> = {
  marks: {
    link: ({ value, children }) => {
      const { href } = value;

      return (
        <ArrowLink newTab href={href}>
          {children}
        </ArrowLink>
      );
    },

    internalLink: ({ value, children }) => {
      const {
        slug: { current },
      } = value;
      const href = `/blog/${current}`;

      return <ArrowLink href={href}>{children}</ArrowLink>;
    },

    code: ({ children }) => {
      return (
        <pre className="inline-block px-1 -py-2 bg-[rgb(227,233,242)] whitespace-normal">
          {children}
        </pre>
      );
    },
  },

  types: {
    code({ value: { language, code } }) {
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
    },

    image({ value }) {
      return <NextSanityImage image={value} className="rounded-3xl bordered" alt={value.caption} />;
    },
  },

  block: {
    h1: ({ children }) => {
      return <h3 className="font-subheading font-semibold !text-2xl !md:text-4xl">{children}</h3>;
    },

    h2: ({ children }) => {
      return <h4 className="font-subheading font-semibold !text-xl !md:text-3xl">{children}</h4>;
    },

    blockquote: ({ children }) => {
      return (
        <blockquote className="py-2 px-4  !border-separator flex flex-col">{children}</blockquote>
      );
    },
  },
};

export default function CustomBlockContent({ blocks }) {
  return <PortableText value={blocks} components={components} />;
}
