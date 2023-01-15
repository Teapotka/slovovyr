import {FC} from "react";
import Cross from "../Modules/Cross";
import {useDispatch} from "react-redux";
import {switchModal} from "../../redux/modalSlice";
import TimerController from "../../controllers/TimerController";
import {useRouter} from "next/router";

const ModalHeader: FC<{ type: TModals }> = ({type}) => {
    const headers = {
        "settings": 'Налаштування',
        "info": 'Як грати ?',
        "win": 'Вітаю !',
        "lose": 'Дідько !',
        "none": ''
    }
    const dispatch = useDispatch()
    const router = useRouter()
    const handler = () => {
        dispatch(switchModal('none'))
        if (type == 'win' || type == 'lose') {
            router.push('/')
            return null
        }
        if (router.route == '/game')
            TimerController.resume()
    }


    return (
        <div className='l-template align-e justify-c padding-rl-10 l-modal-header' data-testid='headerModal'>
            <div></div>
            <div className='flex-center'>{headers[type]}</div>
            <Cross className='flex-right' onClick={handler}/>
        </div>
    )
}
export default ModalHeader