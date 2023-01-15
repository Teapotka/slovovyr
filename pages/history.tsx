import React from "react";
import GridComponent from "../components/Grid/GridComponent";
import HeaderComponent from "../components/Header/HeaderComponent";
import ContentComponent from "../components/Container/ContentComponent";
import Arrow from "../components/Modules/Arrow";
import Logo from "../components/Modules/Logo";
import Settings from "../components/Modules/Settings";
import TableItem from "../components/Modules/TableItem";
import TextBlock from "../components/Modules/TextBlock";
import {useRouter} from "next/router";
import {switchModal} from "../redux/modalSlice";
import {useDispatch} from "react-redux";
import {useEffect, useState} from "react";
import {readDataFromLS, SLOVOVYR_HISTORY_KEY} from "../data/LocalStorage";

export default function History() {
    const router = useRouter()
    const dispatch = useDispatch()
    const [history, setHistory] = useState<TResult[] | any[]>([])
    useEffect(()=>{
        const historyArray:[TResult] = readDataFromLS(SLOVOVYR_HISTORY_KEY)
        setHistory(historyArray)
    },[])
    const handler = () => {
        dispatch(switchModal('settings'))
    }
    return (
        <GridComponent
            header={
                <HeaderComponent
                    type={'l-header-withLogo'}
                    left={<Arrow className='padding-rl-10 flex-left' onClick={()=>router.push('/')}/>}
                    center={<Logo className='flex-center self-center logoSVGMini-box'/>}
                    right={<Settings className='padding-rl-10 flex-right' onClick={handler}/>}
                />
            }
            content={
                <ContentComponent scroll className={'gap-30 padding-b-40'}>
                    <TextBlock
                        text={`Історія ${history ? '' : 'порожня'}`}
                        className='header-text'/>
                    {history && history.map((h)=><React.Fragment key={history.indexOf(h)}>
                        <TableItem item={h}/>
                    </React.Fragment>)}
                </ContentComponent>
            }/>
    )
}