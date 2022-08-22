import React from 'react'
import LinkBlock from './Blocks/LinkBlock'
import PhotoBlock from './Blocks/PhotoBlock'
import TextBlock from './Blocks/TextBlock'

const About = () => {
  return (
    <div className='about-grid'>
        <div className='block-header'>Про нас</div>
        <TextBlock/>
        <PhotoBlock/>
        <LinkBlock/>
        <div>Слава Україні !</div>
    </div>
  )
}

export default About