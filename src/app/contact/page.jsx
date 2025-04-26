import ContactPageHero from "@/components/ContactPage/ContactPageHero/ContactPageHero"
import ContactPageForm from "@/components/ContactPage/ContactPageForm/ContactPageForm"
import ContactPageInfo from "@/components/ContactPage/ContactPageInfo/ContactPageInfo"
import ContactPageMap from "@/components/ContactPage/ContactPageMap/ContactPageMap"

export default function Contact() {
  return (
    <>
      <ContactPageHero />
      <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-12 section-padding">
        <ContactPageForm />
        <ContactPageInfo />
      </div>
      <ContactPageMap />
    </>
  )
}
