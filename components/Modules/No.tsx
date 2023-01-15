import NoSVG from '../../assets/NoSVG'
import {FC} from "react";
const No:FC<{className: string}> = ({className}) =>{
    return(
        <div className={className} data-testid='noModule'>
            <NoSVG/>
        </div>
    )
}

export default No