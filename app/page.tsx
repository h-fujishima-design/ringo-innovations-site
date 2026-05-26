import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Work from "@/components/Work";
import Why from "@/components/Why";
import About from "@/components/About";
import CtaBanner from "@/components/CtaBanner";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Services />
        <div className="text-center py-4">
          <a href="https://vslfrqbbq3ztr4gk.jiem.co.jp/win11kitting.html" target="_blank" rel="noopener noreferrer">
            https://vslfrqbbq3ztr4gk.jiem.co.jp/win11kitting.html
          </a>
        </div>
        <Work />
        <Why />
        <About />
        <CtaBanner />
        <Contact />
      </main>
      <Footer />
    </>
  );
}