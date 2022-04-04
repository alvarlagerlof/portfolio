import { PrismAsync as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkCold as style } from "react-syntax-highlighter/dist/cjs/styles/prism";
import BlockContent from "@sanity/block-content-to-react";
import ArrowLink from "./ArrowLink";
import NextSanityImage from "./SanityImage";

const serializers = {
  marks: {
    link({ mark, children }) {
      const { href } = mark;

      return (
        <ArrowLink newTab href={href}>
          {children}
        </ArrowLink>
      );
    },

    internalLink({ mark, children }) {
      const {
        slug: { current },
      } = mark;
      const href = `/blog/${current}`;

      return <ArrowLink href={href}>{children}</ArrowLink>;
    },

    code({ children }) {
      return (
        <pre className="inline-block px-1 -py-2 bg-[rgb(227,233,242)] whitespace-normal">
          {children}
        </pre>
      );
    },
  },

  types: {
    code({ node: { language, code } }) {
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

    image({ node }) {
      return <NextSanityImage image={node} className="rounded-3xl bordered" />;
    },

    block(props) {
      const { style = "normal" } = props.node;

      if (style === "h1") {
        return (
          <h3 className="font-subheading font-semibold !text-2xl !md:text-4xl">{props.children}</h3>
        );
      }

      if (style === "h2") {
        return (
          <h4 className="font-subheading font-semibold !text-xl !md:text-3xl">{props.children}</h4>
        );
      }

      if (style === "blockquote") {
        return (
          <blockquote className="py-2 px-4  !border-separator flex flex-col">
            {props.children}
          </blockquote>
        );
      }

      return BlockContent.defaultSerializers.types.block(props);
    },
  },
};

export default function CustomBlockContent({ blocks }) {
  return <BlockContent blocks={blocks} serializers={serializers} />;
}
