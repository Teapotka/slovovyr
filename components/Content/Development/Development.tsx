import React, { FC } from 'react'
import ApiBlock from './Blocks/ApiBlock'
import ExBlock from './Blocks/ExBlock'

const Development = () => {
  return (
    <div className='l-content-scroll l-development-grid'>
    <ApiBlock/>
    <div className='line'></div>
    <ExBlock/>
    </div>
  )
}

export default Development