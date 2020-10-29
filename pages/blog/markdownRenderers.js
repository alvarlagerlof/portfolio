import { PrismAsync as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism as style } from "react-syntax-highlighter/dist/cjs/styles/prism";
import Image from "next/image";
import CtaLink from "../../components/CtaLink";

const renderers = {
  heading: ({ level, children }) => {
    switch (level) {
      case 1:
        return <h3>{children}</h3>;
      case 2:
        return <h4>{children}</h4>;
      case 3:
        return <h5>{children}</h5>;
      default:
        return <p>Heading {level} not implemented</p>;
    }
  },
  image: ({ src, alt }) => {
    return <Image src={src} alt={alt} unsized loading="lazy" />;
  },
  link: ({ href, children }) => (
    <CtaLink newTab href={href}>
      {children}
    </CtaLink>
  ),
  code: ({ language, value }) => {
    return (
      <SyntaxHighlighter
        customStyle={{
          marginTop: "16px",
          marginBottom: "32px",
          borderRadius: "8px",
          padding: "16px",
          fontFamily: "unset",
        }}
        style={style}
        language={language}
        children={value}
      />
    );
  },
};

export default renderers;
