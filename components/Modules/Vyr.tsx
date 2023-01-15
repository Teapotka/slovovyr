import VyrSVG from '../../assets/VyrSVG'
import {FC} from "react";
const Vyr:FC<{className: string}> = ({className}) =>{
 return(
     <div className={className} data-testid='vyrModule'>
         <VyrSVG/>
     </div>
 )
}

export default Vyr