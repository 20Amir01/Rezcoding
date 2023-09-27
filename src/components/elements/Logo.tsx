import React from 'react'
import logo from "../../../public/logo-no-background.png"
import Image from 'next/image'

const Logo = () => {
  return (
    <Image src={logo} alt="logo" width={120}></Image>
  )
}

export default Logo