import SettingsModal from "./SettingsModal";
import ModalHeader from "./ModalHeader";
import InfoModal from "./InfoModal";
import ResultModal from "./ResultModal";
import {useSelector} from "react-redux";
import {RootState} from "../../redux/store";
import {useEffect} from "react";
import {ModalContainerController} from "../../controllers/ModalContainerController";

const ModalContainer = () => {
    const typeSelector = useSelector((state:RootState)=>state.modals.modal)
    const type = typeSelector == 'none' ? ModalContainerController.type : typeSelector
    useEffect(()=>{
        ModalContainerController.animate(typeSelector)
    },[typeSelector])
    return(
        <div className={`flex-center l-modal is-hiddenModal`} data-testid='containerModal'>
            <div className={`l-modal-grid modal-${type}`}>
                <ModalHeader type={type}/>
                {type == 'settings' && <SettingsModal/>}
                {type == 'info' && <InfoModal/>}
                {type == 'win' || type == 'lose' ? <ResultModal/> : null}
            </div>
        </div>
    )
}
export default ModalContainer