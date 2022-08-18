import React, { FC } from 'react'
import ApiBlock from './Blocks/ApiBlock'
import ExBlock from './Blocks/ExBlock'

const Development:FC<{data: any[], links: string[]}> = ({data, links}) => {
  return (
    <div className='block-container'>
    <ApiBlock/>
    <div className='horizontal-line'></div>
    <ExBlock data={data} links={links}/>
    </div>
  )
}

export default Development