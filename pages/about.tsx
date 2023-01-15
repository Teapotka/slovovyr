import GridComponent from "../components/Grid/GridComponent";
import HeaderComponent from "../components/Header/HeaderComponent";
import Settings from "../components/Modules/Settings";
import ContentComponent from "../components/Container/ContentComponent";
import Arrow from "../components/Modules/Arrow";
import Logo from "../components/Modules/Logo";
import TextBlock from "../components/Modules/TextBlock";
import FotoBlock from "../components/Modules/FotoBlock";
import {useRouter} from "next/router";
import {useDispatch} from "react-redux";
import {switchModal} from "../redux/modalSlice";

export default function About() {
    const router = useRouter()
    const dispatch = useDispatch()
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
                />}
            content={
                <ContentComponent scroll className={'gap-40'}>
                    <TextBlock
                        text='Про нас'
                        className='header-text'/>
                    <TextBlock
                        text='Оскільки наразі мовне питання постало досить гостро, ми вирішили створити онлайн застосунок, щоб збагатити лексикон українців споконвічними словами з різних регіонів України. '
                        className='text-center'/>
                    <TextBlock
                        text={<>В середньому понад <mark>50%</mark> контенту в соціальних мережах - зросійщено, що суттєво впливає на чистоту та коректність нашої мови.</>}
                        className='text-center'/>
                    <TextBlock
                        text={<>Також в цьому проєкті використовується український  шрифт <mark>Kyiv Region</mark> Дмитра Растворцева, за який ми висловлюємо найщирішу вдячність.</>}
                        className='text-center'/>
                    <FotoBlock
                        direction='left'
                        path='/static/Tymofii_Sukhariev.webp'
                        alt='Tymofii Sukhariev'
                    info={
                        <>Сухарєв Тимофій<br/>Front-end розробник
                            <span>
                                <a href="https://github.com/Teapotka"><mark>GitHub</mark></a> •
                                <a href="https://www.linkedin.com/in/tymofii-sukhariev-9630a2244/"> <mark>LinkedIn</mark></a>
                            </span>
                        </>
                    }/>
                    <FotoBlock
                        direction='right'
                        path='/static/Vladyslav_Todorchuk.webp'
                        alt='Vladyslav Todorchuk'
                    info={
                        <>
                            Tодорчук Владислав<br/>UI/UX дизайнер
                            <a href="https://www.behance.net/vladtodorchuk"><mark>Behance</mark></a>
                        </>
                    }/>
                    <TextBlock
                        text={<>
                            Джерела:
                            <ul>
                                <li><a href="http://irbis-nbuv.gov.ua/cgi-bin/ua/elib.exe?Z21ID=&amp;I21DBN=UKRLIB&amp;P21DBN=UKRLIB&amp;S21STN=1&amp;S21REF=10&amp;S21FMT=online_book&amp;C21COM=S&amp;S21CNR=20&amp;S21P01=0&amp;S21P02=0&amp;S21P03=FF=&amp;S21STR=ukr0001576">Словник польських говорів</a></li>
                                <li><a href="https://drama.kropyva.ch/%D0%A1%D0%BB%D0%BE%D0%B2%D0%BD%D0%B8%D0%BA_%D0%B3%D0%B0%D0%BB%D0%B8%D1%86%D1%8C%D0%BA%D0%BE%D0%B3%D0%BE_%D0%B4%D1%96%D0%B0%D0%BB%D0%B5%D0%BA%D1%82%D1%83">Словник галицького діалекту</a></li><li><a href="https://www.tic.in.ua/?page_id=12791&amp;lang=uk">Інформаційний портал ТЦО</a></li>
                            </ul>
                            Репозиторій:
                            <ul>
                                <li><a href="https://github.com/Teapotka/slovovyr">GitHub</a></li>
                            </ul>
                        </>}
                        className=''
                    />
                    <TextBlock text={"Слава Україні !"} className='text-center padding-b-40'/>
                </ContentComponent>
            }
        />
    )
}
