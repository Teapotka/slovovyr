import {FC, ReactNode} from "react";

const GridComponent:FC<{header: ReactNode, content: ReactNode}> = ({header, content}) => {
    return (
        <div className='l-template l-grid' data-testid='gridComponent'>
            {header}
            {content}
        </div>
    )
}
export default GridComponent

