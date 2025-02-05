import { Header } from './components/header'
import { Hero } from './components/hero'
import { ServicesMenu } from './components/services-menu'
import { Services } from './components/services'
import { OurClients } from './components/our-clients'
import { Quotes } from './components/quotes'
import { Contact } from './components/contact'
import { Footer } from './components/footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <ServicesMenu />
        <Services />
        <OurClients />
        <Quotes />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

