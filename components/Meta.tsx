export function Meta({ title, description, ogImageLayout = "default" }) {
  const domain = `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`;

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title}></meta>
      <meta property="og:site_name" content="alvar.dev"></meta>
      <meta property="og:description" content={description}></meta>
      <meta name="twitter:site" content="@alvarlagerlof"></meta>
      <meta name="twitter:creator" content="@alvarlagerlof"></meta>
      <meta name="twitter:card" content="summary_large_image"></meta>
      {ogImageLayout === "blogpost" ? (
        <meta
          property="og:image"
          content={`${domain}/api/og/default?title=${title}&description=${description}`}
        />
      ) : (
        <meta
          property="og:image"
          content={`${domain}/api/og/blogpost?title=${title}&description=${description}`}
        />
      )}
    </>
  );
}
