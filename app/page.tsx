import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Tech from '@/components/Tech'

export default async function Index() {

  return (
    <div className="w-full flex flex-col items-center justify-center">
        <Hero />
        <Tech />
        <Footer />
    </div>
  )
}
