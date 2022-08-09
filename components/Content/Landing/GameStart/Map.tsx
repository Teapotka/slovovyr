import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../../store/index'
import { change } from '../../../../store/mapSlice'
import Center from './Center'
import East from './East'
import West from './West'

const UaMap = () => {
    const dispatch = useDispatch()
    const region = useSelector((state: RootState) => state.regions)
    console.log(region.region, region.choise)
    const toggle = (id:''|'east'|'west'|'center') =>{

        // document.querySelectorAll('#uaMap path').forEach((el)=>{
        //     el.setAttribute('fill', '#ffffff')
        // })

        // document.getElementById(id)!.setAttribute('fill', '#404040')
        dispatch(change(id))
    }
    console.log(region.region, region.choise)

    return (
        <svg width="100%" id='uaMap' viewBox="0 0 394 262" fill="none" xmlns="http://www.w3.org/2000/svg">
            <East handler={toggle} />
            <West handler={toggle} />
            <Center handler={toggle} />
        </svg>
    )
}
export default UaMap