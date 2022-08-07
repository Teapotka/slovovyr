import React, { FC, ReactNode } from 'react'

// takes all the elements and places them in the grid
const Grid:FC<{children: ReactNode[]}> = ({children}) => {
  return (
    <>
    <div className='l-grid'>        
    {children}
    </div>
    </>
  )
}

export default Grid