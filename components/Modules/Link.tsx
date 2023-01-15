import LinkSVG from '../../assets/LinkSVG'
import {FC} from "react";
const Link:FC<{className: string, onClick: Function}> = ({className, onClick}) =>{
    return(
        <div className={className} data-testid='linkModule' onClick={()=>onClick()}>
            <LinkSVG/>
        </div>
    )
}

export default Link