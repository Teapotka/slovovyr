import {FC, ReactNode} from "react";

const ContentComponent:FC<{children: ReactNode | ReactNode[], scroll?: boolean, className?: string}> = ({children, scroll = false, className = ''}) => {
    return(
        <div className='l-template l-content' data-testid='contentComponent'>
            <div className={`l-template ${scroll ? 'l-content-scroll padding-rl-10' : 'l-content-box'} ${className}`}>
                {children}
            </div>
        </div>
    )
}

export default ContentComponent