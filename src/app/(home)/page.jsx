
import CallForAction from "./components/sections/CallForAction";
import Partners from "./components/sections/Partners";
import Solution from "./components/sections/Solution";
import HomePageData from "@/fakeDatas/HomePageFakes";
import OurPrograms from "./components/sections/OurPrograms";
import ImpactSection from "./components/sections/ImpactSection";
import HistoricalBackground from "./components/sections/historicalBackground";
import Testimonials from './components/sections/Testimonials';
import SlidingBanner from "./components/sections/SlidingBanner";
import FeaturedStories from "./components/sections/FeaturedStories";
import { getMostRecentTestimonials } from "./_actions/blogActions";

export const metadata = {
  title: "Home - Welcome to Igire Rwanda Organization",
  description: "Through education, mentorship, and hands-on training programs, Igire Rwanda helps young women unlock their potential, fostering their confidence and capabilities to lead in their communities.",
  keywords: "Igire Rwanda Organization, AWE, Academy for Women Entrepreneurs, women training bootcamps near me, women training bootcamps in Rwanda, women in tech, IRO, SheCanCODE Bootcamp, SheCanCODE, Igire Rwanda, Women Empowerment, Women Empowerment in Rwanda, Rwanda, Digital Literacy, Entrepreneurship, Gender Gaps, Gender Gap, Empowering young women",
  openGraph: {
    title: "Home - Welcome to Igire Rwanda Organization",
    description: "Through education, mentorship, and hands-on training programs, Igire Rwanda helps young women unlock their potential, fostering their confidence and capabilities to lead in their communities.",
    url: "https://www.igirerwanda.org",
    siteName: "Igire Rwanda Organization",
    images: [
      {
        url: "scc15.jpg",
        width: 800,
        height: 600,
      },
    ],
    locale: "en-US",
    type: "website",
  }
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Home - Welcome to Igire Rwanda Organization",
  "url": "https://www.igirerwanda.org",
  "description": "Through education, mentorship, and hands-on training programs, Igire Rwanda helps young women unlock their potential, fostering their confidence and capabilities to lead in their communities.",
  "image": "/scc15.jpg",
  "author": {
    "@type": "Organization",
    "name": "Igire Rwanda Organization",
    "url": "https://www.igirerwanda.org/",
    "image": "/scc15.jpg",
    "sameAs": [
      "https://www.youtube.com/channel/UCh-zTmgW9gWFl4Va__6AsjQ",
      "https://www.facebook.com/igirerwandaorganization",
      "https://www.instagram.com/shecancode_bootcamp",
      "https://twitter.com/ShecancodeRW"
    ]
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": `https://www.igirerwanda.org`
  }
}

export default async function Home() {
  const response = await getMostRecentTestimonials();
  const testimonialsData = typeof response === 'string' ? JSON.parse(response) : [];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <SlidingBanner />
      <div className="flex flex-col">
        <Solution SolutionSectionData={HomePageData.SolutionSectionData} />
        <OurPrograms />
        <HistoricalBackground HistoryBgData={HomePageData.HistoryBgData} />
        <ImpactSection ImpactData={HomePageData.ImpactData} />
        {testimonialsData.length > 0 && <Testimonials testimonialsData={testimonialsData} />}
        <FeaturedStories />
        <CallForAction CallForActionData={HomePageData.CallForActionData} />
        <Partners PartnersData={HomePageData.PartnersData} />
      </div>
    </>
  );
}
