import {FC, ReactNode} from 'react'

const HeaderComponent:FC<{left?: ReactNode | ReactNode[], center?: ReactNode | ReactNode[], right?: ReactNode | ReactNode[], type?: string}> = ({left, center, right, type=''}) => {
    return(
        <div className={`l-template l-header ${type}`} data-testid='headerComponent'>
            {left || <div></div> }
            {center || <div></div> }
            {right || <div></div> }
        </div>
    )
}

export default HeaderComponent