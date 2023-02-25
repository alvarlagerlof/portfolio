export function Meta({ title, description, ogImageLayout = "default" }) {
  const domain = `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`;

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      {ogImageLayout === "blogpost" ? (
        <meta
          property="og:image"
          content={encodeURI(`${domain}/api/og/blogpost?title=${title}&description=${description}`)}
        />
      ) : (
        <meta
          property="og:image"
          content={encodeURI(`${domain}/api/og/default?title=${title}&description=${description}`)}
        />
      )}
    </>
  );
}
