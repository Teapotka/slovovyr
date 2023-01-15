import YesSVG from '../../assets/YesSVG'
import {FC} from "react";
const Yes:FC<{className: string}> = ({className}) =>{
    return(
        <div className={className} data-testid='yesModule'>
            <YesSVG/>
        </div>
    )
}

export default Yes