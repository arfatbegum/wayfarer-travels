'use client'

import Gallery from '@/components/UI/Gallery/Gallery'
import Overview from '@/components/UI/Overview/Overview'
import About from '@/components/UI/About/About'
import Feedback from '@/components/UI/Feedback/Feedback'
import Footer from '@/components/UI/Footer/Footer'
import News from '@/components/UI/News/News'
import AvailablePackages from '@/components/UI/Home/AvailablePackages'
import UpcomingPackages from '@/components/UI/Home/UpcomingPackages'
import PackagesByCategory from '@/components/UI/Home/PackagesByCategory'
import Hero from '@/components/UI/Home/Hero'

export default function Home() {
  return (
    <div>
      <div className="min-h-[calc(100vh-64px)]">
        <Hero />
        <AvailablePackages />
        <UpcomingPackages />
        <About />
        <PackagesByCategory />
        <Overview />
        <Feedback />
        <News />
        <Gallery />
        <Footer />
      </div>
    </div>
  )
}
