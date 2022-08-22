import React from 'react'

const PhotoBlock = () => {
  return (
    <>
        <div className='photo-block'>
            <img src="/static/Tymofii_Sukhariev.webp" alt="Developer" className='thumbnail'/>
            <div className='desc-block'>
                Сухарєв Тимофій<br/>Front-end розробник
                <span><a href="https://github.com/Teapotka">GitHub</a> • <a href="https://www.linkedin.com/in/tymofii-sukhariev-9630a2244/">LinkedIn</a> • <a href="https://my-cv-app.netlify.app/">CV</a></span>
            </div>
        </div>
        <div className='photo-block'>
            <div className='desc-block'>
                Тодорчук Владислав<br/>UI/UX дизайнер<br/>
                <a href="https://www.behance.net/vladtodorchuk">Behance</a>
                </div>
            <img src="/static/Vladyslav_Todorchuk.webp" alt="UI/UX designer" className='thumbnail'/>
        </div>
    </>
  )
}

export default PhotoBlock