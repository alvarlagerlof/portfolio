import Separator from "./Separator";

export default function Footer() {
  return (
    <>
      <Separator />
      <footer className="py-14">
        <p className="font-subheading text-2xl">
          Made with <span className="text-primary">❤</span> in Stockholm
        </p>
      </footer>
    </>
  );
}
