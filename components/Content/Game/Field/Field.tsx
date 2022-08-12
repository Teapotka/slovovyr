import React from 'react'

const Field = () => {
    const grid = (() => {
        return Array.from(new Array(30),
            (val, index) => React.createElement('div', { key: index, className: 'field-item' }, ''))
    })()
    console.log(grid)
    return (
        <>
            <div className='field'>
                {grid}
            </div>
        </>
    )
}

export default Field