import SettingsSVG from "../../assets/SettingsSVG";
import {FC} from "react";
const Settings:FC<{className: string, onClick: Function}> = ({className,onClick}) => {
    return (
        <div className={className} onClick={()=>onClick()} data-testid='settingsModule'>
            <SettingsSVG/>
        </div>
    )
}

export default Settings