import PortfolioPageHero from "@/components/PortfolioPage/PortfolioPageHero/PortfolioPageHero"
import PortfolioPageProjects from "@/components/PortfolioPage/PortfolioPageProjects/PortfolioPageProjects"
import PortfolioPageTestimonials from "@/components/PortfolioPage/PortfolioPageTestimonials/PortfolioPageTestimonials"
import PortfolioPageCTA from "@/components/PortfolioPage/PortfolioPageCTA/PortfolioPageCTA"

export default function Portfolio() {
  return (
    <>
      <PortfolioPageHero />
      <PortfolioPageProjects />
      <PortfolioPageTestimonials />
      <PortfolioPageCTA />
    </>
  )
}
