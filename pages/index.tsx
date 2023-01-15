import GridComponent from "../components/Grid/GridComponent";
import HeaderComponent from "../components/Header/HeaderComponent";
import ContentComponent from "../components/Container/ContentComponent";
import Vyr from "../components/Modules/Vyr";
import Logo from "../components/Modules/Logo";
import Button from "../components/Modules/Button";
import Settings from "../components/Modules/Settings";
import Navigation from "../components/Modules/Navigation";
import Map from "../components/Modules/Map/Map";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../redux/store";
import {useRouter} from "next/router";
import {writeRegionToLS} from "../data/LocalStorage";
import {switchModal} from "../redux/modalSlice";

export default function Home() {
    const region = useSelector((state:RootState)=>state.map.region)
    const router = useRouter()
    const [isTouched, setTouched] = useState(false)
    const [isVisible, setVisible] = useState(false)
    const animationTime = 1000
    const dispatch = useDispatch()
    const condition = new Date().getHours() == 23 && new Date().getMinutes() >= 45
    useEffect( ()=>{
       if(isTouched){
            setTimeout(()=>{
                setVisible(true)
            },animationTime)
       }
    },[isTouched])
    const handler = () => {
        dispatch(switchModal('settings'))
    }
    return (
        <GridComponent
            header={
                <HeaderComponent
                    left={<Navigation className='flex align-c justify-sb padding-rl-10 navigation'/>}
                    right={<Settings className='flex-right padding-rl-10' onClick={handler}/>}
                />}
            content={
                <ContentComponent className={
                    `padding-t-20 ${isTouched && !isVisible ? 'is-hiddenLayout' : ''} ${isVisible ? 'l-content-box-alt is-visibleLayout' : ''}`}
                >
                    {
                        isVisible ?
                            <>
                                <Logo className='flex-center logoSVG-box'/>
                                <Map className='mapSVG-box'/>
                                <Button
                                    className={`flex-center text-center button border ${region == 'none' || condition ? 'is-inactive' : ''}`}
                                    text={
                                        condition ? 'гра оновиться о 00:00' :
                                        region == 'none' ? 'оберіть регіон' : 'рушаймо !'
                                    }
                                    onClick={()=>{
                                        if(region != 'none' && !condition) {
                                            writeRegionToLS(region)
                                            router.push('/game')
                                        }
                                    }}
                                />
                            </>
                            :
                            <>
                                <Vyr className='flex-center vyrSVG-box'/>
                                <Logo className='flex-center logoSVG-box'/>
                                <Button
                                    className='flex-center button border'
                                    text='розпочати гру'
                                    onClick={()=>setTouched(true)}
                                />
                            </>}
                </ContentComponent>
            }
        />
    )
}
