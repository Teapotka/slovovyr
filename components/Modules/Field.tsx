import React, {FC} from "react";

const Field:FC<{className: string}> = ({className}) => {
    const grid = (() => {
        return Array.from(new Array(30),
            (val, index) => React.createElement('div', { key: index, className: 'field-item' }, ''))
    })()
    return (
            <div data-testid='fieldModule' className={className}>
                {grid}
            </div>
    )
}

export default Field