import HomePageHero from "@/components/HomePage/HomePageHero/HomePageHero"
import HomePageAbout from "@/components/HomePage/HomePageAbout/HomePageAbout"
import HomePageServices from "@/components/HomePage/HomePageServices/HomePageServices"
import HomePageTestimonials from "@/components/HomePage/HomePageTestimonials/HomePageTestimonials"
import HomePageStats from "@/components/HomePage/HomePageStats/HomePageStats"
import HomePageCTA from "@/components/HomePage/HomePageCTA/HomePageCTA"

export default function Home() {
  return (
    <>
      <HomePageHero />
      <HomePageAbout />
      <HomePageServices />
      <HomePageStats />
      <HomePageTestimonials />
      <HomePageCTA />
    </>
  )
}
