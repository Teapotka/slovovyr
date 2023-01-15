import BackspaceSVG from '../../assets/BackspaceSVG'
import {FC} from "react";
const Backspace:FC<{className: string}> = ({className}) =>{
    return(
        <div className={className} data-testid='backspaceModule' id='backspaceModule'>
            <BackspaceSVG/>
        </div>
    )
}

export default Backspace