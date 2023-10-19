'use client'

import Gallery from '@/components/Gallery/Gallery'
import Overview from '@/components/Overview/Overview'
import About from '@/components/UI/About/About'
import Feedback from '@/components/UI/Feedback/Feedback'
import Footer from '@/components/UI/Footer/Footer'
import AvailableService from '@/components/UI/Home/AvailableService'
import Header from '@/components/UI/Home/Header'
import UpcomingService from '@/components/UI/Home/UpcomingService'
import News from '@/components/UI/News/News'
import ServiceByCategory from '@/components/UI/ServiceByCategory/ServiceByCategory'

export default function Home() {
  return (
    <div>
      <div className="min-h-[calc(100vh-64px)]">
        <Header />
        <AvailableService />
        <UpcomingService />
        <About />
        <ServiceByCategory/>
        <Overview/>
        <Feedback />
        <News />
        <Gallery/>
        <Footer/>
      </div>
    </div>
  )
}
