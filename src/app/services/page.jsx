import ServicesPageHero from "@/components/ServicesPage/ServicesPageHero/ServicesPageHero"
import ServicesPageList from "@/components/ServicesPage/ServicesPageList/ServicesPageList"
import ServicesPageProcess from "@/components/ServicesPage/ServicesPageProcess/ServicesPageProcess"
import ServicesPagePricing from "@/components/ServicesPage/ServicesPagePricing/ServicesPagePricing"
import ServicesPageFAQ from "@/components/ServicesPage/ServicesPageFAQ/ServicesPageFAQ"
import ServicesPageCTA from "@/components/ServicesPage/ServicesPageCTA/ServicesPageCTA"

export default function Services() {
  return (
    <>
      <ServicesPageHero />
      <ServicesPageList />
      <ServicesPageProcess />
      <ServicesPagePricing />
      <ServicesPageFAQ />
      <ServicesPageCTA />
    </>
  )
}
