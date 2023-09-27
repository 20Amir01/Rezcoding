import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'

interface NavLinksProps{
     layout?: "vertical" | "horizontal";
}

const Navlinks = ({layout="horizontal"}:NavLinksProps) => {
     const pathname = usePathname();
  return (
     <nav className={layout=='horizontal'?"":"mt-5"}>
     <ul className={`flex ${layout==="horizontal"?"gap-4 items-center":"flex-col items-start gap-2.5"} text-neutral-800  font-semibold`}>
     <li>
         <Link href="/programming" className={`rounded-sm p-0.5 transition-all hover:text-blue-500 ${pathname==="/cities"?"text-indigo-500":""}`}>برنامه نویسی</Link>
       </li>
     </ul>
   </nav>
  )
}

export default Navlinks