import {FC} from "react";
const Button:FC<{className: string, text: string, onClick: Function}> = ({className, text, onClick}) =>{
    return(
        <div className={className} data-testid='buttonModule' onClick={()=>onClick()}>
            {text}
        </div>
    )
}

export default Button