import Backspace from "./Backspace";
import Enter from "./Enter";
import React, {useEffect} from "react";
import {useDispatch} from "react-redux";
import {KeyboardController} from "../../controllers/KeyboardController";

const Keyboard = () => {
    const dispatch = useDispatch()
    const keys = ['й','ц','у','к','е','н','г','ш','щ','з','х','ї',
        'ф','і','в','а','п','р','о','л','д','ж','є',<Backspace className='flex-center'/>,
        'ґ','я','ч','с','м','и','т','ь','б','ю', <Enter className='flex-center'/>]
    useEffect(()=>{
        KeyboardController.addDispatch(dispatch)
        window.onkeyup = KeyboardController.onKeyUp
    },[])
    const handle = KeyboardController.onClick.bind(KeyboardController)
    return(
        <div className='keyboard-grid' data-testid='keyboardModule'>
            {keys.map((k)=><div
                className='keyboard-item'
                id={typeof k == "string" ? k : ''}
                onClick={(e)=>handle(e)}
                key={keys.indexOf(k)}>{k}</div>)}
        </div>
    )
}

export default Keyboard
