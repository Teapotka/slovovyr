import LogoSVG from '../../assets/LogoSVG'
import {FC} from "react";
const Logo:FC<{className: string}> = ({className}) =>{
    return(
        <div className={className} data-testid='logoModule'>
            <LogoSVG/>
        </div>
    )
}

export default Logo