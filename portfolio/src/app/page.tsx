import About from "@/components/About";
import Capabilities from "@/components/Capabilities";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import IndexList from "@/components/IndexList";
import Marquee from "@/components/Marquee";
import Nav from "@/components/Nav";
import Statement from "@/components/Statement";
import Work from "@/components/Work";
import { profile, projects, siteUrl, socials } from "@/content/profile";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.fullName,
  jobTitle: profile.role,
  email: `mailto:${profile.email}`,
  url: siteUrl,
  address: { "@type": "PostalAddress", addressLocality: profile.location },
  sameAs: socials.filter((s) => s.href.startsWith("http")).map((s) => s.href),
  knowsAbout: projects.flatMap((p) => p.stack),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <Nav />
      <main id="main">
        <Hero />
        <IndexList />
        <Statement />
        <Marquee />
        <Work />
        <About />
        <Capabilities />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
