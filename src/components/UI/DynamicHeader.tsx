import dynamic from 'next/dynamic'
 
const PublicHeader = dynamic(() => import('./PublicHeader'), { ssr: false })
 
export default function DynamicHeader() {
  return (
    <div>
      <PublicHeader />
    </div>
  )
}