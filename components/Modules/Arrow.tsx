import ArrowSVG from '../../assets/ArrowSVG'
import {FC} from "react";
const Arrow:FC<{className: string, onClick: Function}> = ({className, onClick}) =>{
    return(
        <div className={className} data-testid='arrowModule' onClick={()=>onClick()}>
            <ArrowSVG/>
        </div>
    )
}

export default Arrow