import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
   <div className="flex justify-center items-center mt-44 text-2xl">
    Go to <Link href={"/dahsboard"}>Dashboard</Link>
   </div>
  )
}

export default page