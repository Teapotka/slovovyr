import React from 'react'
import Center from './Center'
import East from './East'
import West from './West'

const UaMap = () => {
    const toggle = (id:string) =>{
        document.querySelectorAll('#uaMap path').forEach((el)=>{
            el.setAttribute('fill', '#ffffff')
        })
        document.getElementById(id)!.setAttribute('fill', '#404040')
    }
    return (
        <svg width="100%" id='uaMap' viewBox="0 0 394 262" fill="none" xmlns="http://www.w3.org/2000/svg">
            <East handler={toggle} />
            <West handler={toggle} />
            <Center handler={toggle} />
        </svg>
    )
}
export default UaMap