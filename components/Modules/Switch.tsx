import SwitchSVG from "../../assets/SwitchSVG";
import {FC} from "react";
const Switch:FC<{className: string, onClick: Function, id:string}> = ({className, onClick, id}) => {
    return (
        <div className={className} data-testid='switchModule' id={id} onClick={()=>onClick()}>
            <SwitchSVG/>
        </div>
    )
}

export default Switch