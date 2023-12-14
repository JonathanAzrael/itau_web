import { SectionHero } from '@/components/SectionHero'
import { SectionServices } from '@/components/SectionServices'
import Footer from '@/components/Footer'

import Image from 'next/image'

export default function Home() {
  return (
    <>
        <SectionHero />
    <SectionServices />
    <Footer />
    </>

  )
}
