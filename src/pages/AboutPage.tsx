import AboutHero from "@/components/about/AboutHero";
import AboutInfo from "@/components/about/AboutInfo";
import Skills from "@/components/about/Skills";
import Experience from "@/components/about/Experience";
import Contact from "@/components/about/Contact";
import Services from "@/components/about/Services";
import Facts from "@/components/about/Facts";

export default function AboutPage() {
  return (
    <div className="about-page">

    <AboutHero />

    <Facts />

    <div className="about-grid">
        <AboutInfo />
        <Skills />
    </div>

    <Services />

    <Experience />

    <Contact />

</div>
  );
}