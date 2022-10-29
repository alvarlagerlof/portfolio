export default function Meta({ title, description, ogImageLayout = "default" }) {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title}></meta>
      <meta property="og:site_name" content="alvar.dev"></meta>
      <meta property="og:description" content={description}></meta>
      <meta name="twitter:card" content="summary_large_image"></meta>
      <meta name="twitter:site" content="@alvarlagerlof"></meta>
      <meta name="twitter:creator" content="@alvarlagerlof"></meta>
    </>
  );
}
