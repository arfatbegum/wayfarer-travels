'use client'

import Gallery from '@/components/UI/Home/Gallery'
import Overview from '@/components/UI/Home/Overview'
import Feedback from '@/components/UI/Feedback/Feedback'
import Footer from '@/components/UI/Footer/Footer'
import News from '@/components/UI/News/News'
import AvailablePackages from '@/components/UI/Home/AvailablePackages'
import UpcomingPackages from '@/components/UI/Home/UpcomingPackages'
import PackagesByCategory from '@/components/UI/Home/PackagesByCategory'
import Hero from '@/components/UI/Home/Hero'
import Banner from '@/components/UI/Home/Banner'
import About from '@/components/UI/Home/About'
import { usePackagesQuery } from '@/redux/api/packageApi'
import Loader from '@/components/UI/Shared/Loader'

export default function Home() {
  const query: Record<string, any> = {};
  const { data, isLoading } = usePackagesQuery({ ...query });
  const packages = data?.packages;
  return (
    <div>
      {
        isLoading ? (
          <Loader />
        ) : (
          <div className="min-h-[calc(100vh-64px)]">
            <Hero />
            <About />
            <AvailablePackages packages={packages} />
            <UpcomingPackages />
            <PackagesByCategory />
            <Overview />
            <Feedback />
            <Banner />
            <News />
            <Gallery />
            <Footer />
          </div>
        )
      }
    </div>
  )
}
