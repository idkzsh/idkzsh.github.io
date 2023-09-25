import LinkCard from '@/components/link-card'
import React from 'react'

const Film = () => {
  return (
    <div className="gap-4 flex flex-col items-center justify-center w-[80vw] max-w-[800px] h-[70vh] mb-11 z-10">
    <div className="flex flex-wrap justify-center w-full gap-3">
      <LinkCard title="coming soon" />
    </div>
  </div>
  )
}

export default Film