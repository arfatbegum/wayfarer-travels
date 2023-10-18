import AvailableService from '@/components/UI/Home/AvailableService'
import Header from '@/components/UI/Home/Header'

export default function Home() {
  return (
    <div>
      <div className="min-h-[calc(100vh-64px)]">
        <Header />
        <AvailableService/>
      </div>
    </div>
  )
}
