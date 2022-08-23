import { GetServerSidePropsContext } from 'next'
import React, { useEffect, useState } from 'react'
import { Provider } from 'react-redux'
import History from '../components/Content/History/History'
import Grid from '../components/Grid/Grid'
import GridTemp from '../components/Grid/GridTemp'
import HeaderAlternative from '../components/Header/HeaderAlternative'
import HeaderTemp from '../components/Header/HeaderTemp'
import { readAllData } from '../data/localMemory'
import { store } from '../store'

// export async function getServerSideProps(context: GetServerSidePropsContext) {
//     const all = readAllData()
//     return {
//         props: {
//             all
//         },
//     }
// }
const HistoryPage = () => {
    return (
    <>
    {/* <Provider store={store}> */}
    <GridTemp state=''>
        <HeaderTemp type='alternative'/>
        <History/>
    </GridTemp>
    {/* </Provider> */}
    </>
    )
}

export default HistoryPage