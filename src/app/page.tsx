'use client'

import Gallery from '@/components/UI/Gallery/Gallery'
import Overview from '@/components/UI/Overview/Overview'
import About from '@/components/UI/About/About'
import Feedback from '@/components/UI/Feedback/Feedback'
import Footer from '@/components/UI/Footer/Footer'
import Header from '@/components/UI/Home/Header'
import News from '@/components/UI/News/News'
import AvailablePackages from '@/components/UI/Home/AvailablePackages'
import UpcomingPackages from '@/components/UI/Home/UpcomingPackages'
import PackagesByCategory from '@/components/UI/Home/PackagesByCategory'

export default function Home() {
  return (
    <div>
      <div className="min-h-[calc(100vh-64px)]">
        <Header />
        <AvailablePackages />
        <UpcomingPackages/>
        <About />
        <PackagesByCategory/>
        <Overview />
        <Feedback />
        <News />
        <Gallery />
        <Footer />
      </div>
    </div>
  )
}
