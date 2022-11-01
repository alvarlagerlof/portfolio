import { Footer } from "components/Footer";
import { Navbar } from "components/Navbar";
import { WithDividers } from "components/WithDividers";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center mx-4 sm:mx-8 md:mx-12">
      <div className="w-full xl:w-3/4 max-w-6xl">
        <>
          <Navbar />
          <main className="my-16">{children}</main>
          <Footer />
        </>
      </div>
    </div>
  );
}
