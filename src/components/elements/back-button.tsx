"use client"
import { ChevronRight } from 'lucide-react'
import {useRouter} from "next/navigation"
const BackButton = () => {
const router=useRouter()
  return (
     <button
     onClick={()=>router.back()}
     className="translate-x-2.5 text-neutral-700 text-opacity-50 rounded-l-lg"
     title="صفحه قبل"
   >
     <ChevronRight size={38} />
   </button>
  )
}

export default BackButton