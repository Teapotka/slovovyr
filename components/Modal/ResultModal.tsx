import TextBlock from "../Modules/TextBlock";
import {useEffect, useState} from "react";
import TimerController from "../../controllers/TimerController";
import {useSelector} from "react-redux";
import {RootState} from "../../redux/store";
import {ResultModalController} from "../../controllers/ResultModalController";

const ResultModal = () => {
    const [{word, meaning}, setWord] =  useState({word: '', meaning: ''})
    const type = useSelector((state: RootState)=>state.modals.modal)
    useEffect(()=>{
        TimerController.pause()
        ResultModalController.writeResult(type)
        const word = ResultModalController.word
        setWord(word)
    },[])
    return(
        <div className='l-template l-modal-result align-content-c justify-c gap-15' data-testid='resultModal'>
            <TextBlock text={`Шукане слово - ${word}`} className='text-center'/>
            <TextBlock text={`Значення - ${meaning}`} className='text-center'/>
        </div>
    )
}

export default ResultModal