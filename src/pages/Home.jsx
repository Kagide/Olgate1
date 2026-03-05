import Hero from '../components/Hero'
import Services from '../components/Services'
import WhyChooseUs from '../components/WhyChooseUs'
import StatsBar from "../components/StatsBar.jsx";
import TestimonialCarousel from '../components/TestimonialCarousel'
import ContactForm from '../components/ContactForm'

export default function Home() {
  return (
    <main id="main-content" aria-label="Main content">
      <Hero />
      <Services />
      <WhyChooseUs />
      <StatsBar />
      <TestimonialCarousel />
      <ContactForm />
    </main>
  )
}