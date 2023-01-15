import HeaderComponent from "../components/Header/HeaderComponent";
import Settings from "../components/Modules/Settings";
import GridComponent from "../components/Grid/GridComponent";
import ContentComponent from "../components/Container/ContentComponent";
import Arrow from "../components/Modules/Arrow";
import Logo from "../components/Modules/Logo";
import Info from "../components/Modules/Info";
import Timer from "../components/Modules/Timer";
import Field from "../components/Modules/Field";
import Keyboard from "../components/Modules/Keyboard";
import {useRouter} from "next/router";
import {useEffect} from "react";
import {readDataFromLS, SLOVOVYR_HISTORY_KEY, SLOVOVYR_REGION_KEY} from "../data/LocalStorage";
import TimerController from "../controllers/TimerController";
import {switchModal} from "../redux/modalSlice";
import {useDispatch} from "react-redux";

export default function Game() {
    const router = useRouter()
    const dispatch = useDispatch()
    useEffect(()=>{
        readDataFromLS(SLOVOVYR_REGION_KEY) == null &&
            router.push('/')
        !readDataFromLS(SLOVOVYR_HISTORY_KEY) &&
            (document.querySelector('.l-header > div:last-child > div') as HTMLElement).click()
    })
    const handler = (modal:TModals) => {
        TimerController.pause()
        dispatch(switchModal(modal))
    }
    const leave = () => {
        TimerController.pause()
        router.push('/')
    }
    return (
        <GridComponent
            header={
                <HeaderComponent
                    type={'l-header-withLogo'}
                    left={<Arrow className='padding-rl-10 flex-left' onClick={leave}/>}
                    center={<Logo className='flex-center self-center logoSVGMini-box'/>}
                    right={
                    <div className='flex-right'>
                        <Info className='' onClick={()=>handler('info')}/>
                        <Settings className='padding-rl-10' onClick={()=>handler('settings')}/>
                    </div>
                }
                />}
            content={
                <ContentComponent className='l-content-box-game'>
                    <Timer className='flex-center'/>
                    <Field className='field-grid'/>
                    <Keyboard/>
                </ContentComponent>
            }
        />
    )
}