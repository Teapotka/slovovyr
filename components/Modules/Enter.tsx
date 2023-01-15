import EnterSVG from '../../assets/EnterSVG'
import {FC} from "react";
const Enter:FC<{className: string}> = ({className}) =>{
    return(
        <div className={className} data-testid='enterModule' id='enterModule'>
            <EnterSVG/>
        </div>
    )
}

export default Enter