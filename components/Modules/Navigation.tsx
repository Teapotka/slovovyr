import {FC} from "react";
import {useRouter} from "next/router";

const Navigation:FC<{className: string}> = ({className}) => {
    const router = useRouter()
    return(
        <div className={className} data-testid='navigationModule'>
            <div onClick={()=>router.push('/about')}>про нас</div>
            <div onClick={()=>router.push('/history')}>історія</div>
            <div onClick={()=>router.push('/server')}>апі</div>
        </div>
    )
}

export default Navigation