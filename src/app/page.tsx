import Link from 'next/link'
import React from 'react'
import { Button } from '@/components/ui/button'

const page = () => {
  return (
    <div className="flex justify-center items-center mt-44 text-2xl">
      <Link href={'/dashboard'}>
        <Button className="bg-[#0f172a] hover:bg-slate-700 hover:text-white text-sm mt-2 w-full text-center dark:text-white">
          Go To Dashboard
        </Button>
      </Link>

    </div>
  )
}

export default page