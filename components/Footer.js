import ClickableLink from "./ClickableLink";

export default function Footer() {
  return (
    <footer>
      <p>Reach out</p>
      <ul>
        <li>
          <ClickableLink href="https://twitter.com/alvarlagerlof">Twitter</ClickableLink>
        </li>
        <li>
          <a href="https://linkedin.com/in/alvarlagerlof">LinkedIn</a>
        </li>
        <li>
          <a href="mailto:hi@alvar.dev">Email</a>
        </li>
      </ul>
    </footer>
  );
}
