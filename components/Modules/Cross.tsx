import {FC} from "react";
import CrossSVG from "../../assets/CrossSVG";
const Cross:FC<{className: string, onClick: Function}> = ({className, onClick}) =>{
    return(
        <div className={className} data-testid='crossModule' onClick={()=>onClick()}>
            <CrossSVG/>
        </div>
    )
}

export default Cross