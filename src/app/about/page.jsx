import AboutPageHero from "@/components/AboutPage/AboutPageHero/AboutPageHero"
import AboutPageMission from "@/components/AboutPage/AboutPageMission/AboutPageMission"
import AboutPageTeam from "@/components/AboutPage/AboutPageTeam/AboutPageTeam"
import AboutPageHistory from "@/components/AboutPage/AboutPageHistory/AboutPageHistory"
import AboutPageCTA from "@/components/AboutPage/AboutPageCTA/AboutPageCTA"

export default function About() {
  return (
    <>
      <AboutPageHero />
      <AboutPageMission />
      <AboutPageHistory />
      <AboutPageTeam />
      <AboutPageCTA />
    </>
  )
}
