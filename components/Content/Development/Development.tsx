import React, { FC } from 'react'
import ApiBlock from './Blocks/ApiBlock'
import ExBlock from './Blocks/ExBlock'

const Development = () => {
  return (
    <div className='block-container'>
    <ApiBlock/>
    <div className='horizontal-line'></div>
    <ExBlock/>
    </div>
  )
}

export default Development