import { Footer } from "components/Footer";
import Link from "next/link";

export default function BackNavLayout({ children }) {
  return (
    <div className="flex flex-col items-center mx-4 sm:mx-8 md:mx-12">
      <div className="w-full xl:w-3/4 max-w-6xl">
        {/* <WithDividers direction="vertical"> */}
        <nav className="py-6!">
          <Link
            href="/blog"
            className="font-subheading text-xl text-primary font-semibold no-underline hover:underline"
          >
            ← All posts
          </Link>
        </nav>

        <main className="my-16">{children}</main>

        <Footer />
      </div>
    </div>
  );
}
