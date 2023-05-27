import { PortableText } from "@portabletext/react";
import { Suspense } from "react";

import { ArrowLink } from "./ArrowLink";
import { CodeBlock } from "./CodeBlock";
import { NextSanityImage } from "./NextSanityImage";
import { Skeleton } from "./Skeleton";

export function CustomBlockContent({ blocks }) {
  return (
    <PortableText
      value={blocks}
      components={{
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
              <code className="inline-block px-1 -py-2 bg-[rgb(227,233,242)] whitespace-normal">
                {children}
              </code>
            );
          },
        },

        types: {
          code(props) {
            const { language, code } = props.value;
            return (
              <Suspense fallback={<Skeleton className="w-full h-48 rounded-2xl" />}>
                <CodeBlock language={language} code={code} />
              </Suspense>
            );
          },
          image({ value }) {
            return (
              <NextSanityImage
                image={value}
                className="rounded-2xl border-2 border-imgborder"
                alt={value.caption}
              />
            );
          },
        },

        block: {
          h1: ({ children }) => {
            return (
              <h3 className="font-subheading font-semibold !text-2xl !md:text-4xl">{children}</h3>
            );
          },
          h2: ({ children }) => {
            return (
              <h4 className="font-subheading font-semibold !text-xl !md:text-3xl">{children}</h4>
            );
          },
          blockquote: ({ children }) => {
            return (
              <blockquote className="py-2 px-4  !border-separator flex flex-col">
                {children}
              </blockquote>
            );
          },
        },
      }}
    />
  );
}
