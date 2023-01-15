import HeaderComponent from "../components/Header/HeaderComponent";
import Arrow from "../components/Modules/Arrow";
import Logo from "../components/Modules/Logo";
import Settings from "../components/Modules/Settings";
import TextBlock from "../components/Modules/TextBlock";
import ContentComponent from "../components/Container/ContentComponent";
import GridComponent from "../components/Grid/GridComponent";
import Link from "../components/Modules/Link";
import {useRouter} from "next/router";
import {switchModal} from "../redux/modalSlice";
import {useDispatch} from "react-redux";

export default function Server() {
    const router = useRouter()
    const dispatch = useDispatch()
    const BASE_URL = process.env.BASE_URL
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
                <ContentComponent scroll className={'gap-30'}>
                    <TextBlock
                        text='Апі'
                        className='header-text'/>
                    <TextBlock
                        text={<>Це апі використовує сайт <mark><a href="https://slovnyk.ua/">slovnyk.ua</a></mark> як джерело інформації. За допомогою бібліотеки <mark><a href="https://axios-http.com/">Axios</a></mark> виконується крос-домений запит, результат якого парситься завдяки <mark><a href="https://cheerio.js.org/">Cheerio</a></mark></>}
                        className='text-center'/>
                    <TextBlock
                        text={`${BASE_URL}/api/v1/ваше_слово`}
                        className='text-center'/>
                    <Link className={'flex-center'}
                          onClick={()=>navigator.clipboard
                              .writeText('https://slovovyr.pp.ua/api/ваше_слово')}/>
                    <TextBlock
                        text={<>У відповідь ви отримаєте JSON у якому наявні такі поля, як:<br/><br/><mark>count</mark> - кількість визначень<br/><br/><mark>index</mark> - індекс визначення<br/><br/><mark>info</mark> - визначення</>}
                        className='text-center'/>
                    <TextBlock
                        text='Для вибору іншого варіанта визначення слова з усієї кількості можливих ви можете задати індекс:'
                        className={'text-center'}/>
                    <TextBlock
                        text={`${BASE_URL}/api/v1/ваше_слово/ваш_індекс`}
                        className='text-center'/>
                    <Link className={'flex-center padding-b-40'}
                          onClick={()=>navigator.clipboard
                              .writeText('https://slovovyr.pp.ua/api/ваше_слово/ваш_індекс')}/>
                    </ContentComponent>
                }
        />
    )
}