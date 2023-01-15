import Switch from "../Modules/Switch";
import {useEffect} from "react";
import {SettingsModalController} from "../../controllers/SettingsModalController";

const SettingsModal = () => {
    useEffect(()=>{
        SettingsModalController.loadSwitchersData()
    },[])
    const toggle = (id: 'dark' | 'colorBlind') => SettingsModalController.toggle(id)
    return(
        <div className='modal-settings-box padding-rl-10' data-testid='settingsModal'>
            <div className='modal-settings-row'>
                <div>Темна тема</div>
                <Switch className='flex-center is-inactiveSVG' id={'dark'} onClick={()=>toggle('dark')}/>
            </div>
            <div className='modal-settings-row'>
                <div>Режим дальтонізму</div>
                <Switch className='flex-center is-inactiveSVG' id={'colorBlind'} onClick={()=>{toggle('colorBlind')}}/>
            </div>
        </div>
    )
}
export default SettingsModal