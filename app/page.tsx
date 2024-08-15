import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import FeatureSection from '../components/FeatureSection'
import SampleCode from '../components/SampleCode'
import ClientsAndTemplates from '../components/ClientsAndTemplates'
import PriceSection from '../components/PriceSection'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <FeatureSection id="features" />
      <SampleCode id="sample" />
      <ClientsAndTemplates id="templates" />
      <PriceSection id="price" />
      <Footer />
      <ScrollToTop />
    </main>
  )
}