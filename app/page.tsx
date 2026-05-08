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
        <a href="https://vslfrqbbq3ztr4gk.jiem.co.jp/win11kitting.html" target="_blank">Win11 Kitting</a>
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