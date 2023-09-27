import React, {ReactNode } from 'react'
interface GridProps{
     children:ReactNode
}
const Grid = ({children}:GridProps) => {
  return (
    <div className='grid grid-col-1 sm:grid-cols-2 md:grid-cols-3'>{children}</div>
  )
}

export default Grid;