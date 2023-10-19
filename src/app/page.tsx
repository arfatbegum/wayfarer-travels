import Feedback from '@/components/UI/Feedback/Feedback'
import AvailableService from '@/components/UI/Home/AvailableService'
import Header from '@/components/UI/Home/Header'
import UpcomingService from '@/components/UI/Home/UpcomingService'
import News from '@/components/UI/News/News'

export default function Home() {
  return (
    <div>
      <div className="min-h-[calc(100vh-64px)]">
        <Header />
        <AvailableService />
        <UpcomingService/>
        <Feedback />
        <News/>
      </div>
    </div>
  )
}
