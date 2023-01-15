import {FC} from "react";
import InfoSVG from "../../assets/InfoSVG";
const Info:FC<{className: string, onClick: Function}> = ({className, onClick}) =>{
    return(
        <div className={className} data-testid='infoModule' onClick={()=>onClick()}>
            <InfoSVG/>
        </div>
    )
}

export default Info