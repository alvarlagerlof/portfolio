import ArrowLink from "./ArrowLink";

export default function Footer() {
  return (
    <footer className="mb-8 md:mb-14">
      <p className="font-subheading xl:text-xl">
        Made with <span className="text-primary">❤</span> by{" "}
        <ArrowLink href="https://twitter.com/alvarlagerlof">@alvarlagerlof</ArrowLink>
      </p>
    </footer>
  );
}
