import React from 'react'
import History from '../components/Content/History/History'
import GridTemp from '../components/Grid/GridTemp'
import HeaderTemp from '../components/Header/HeaderTemp'

const HistoryPage = () => {
    return (
    <>
    <GridTemp state=''>
        <HeaderTemp type='alternative'/>
        <History/>
    </GridTemp>
    </>
    )
}

export default HistoryPage