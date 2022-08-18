import { GetServerSidePropsContext } from 'next'
import React, { useEffect, useState } from 'react'
import { Provider } from 'react-redux'
import History from '../components/Content/History/History'
import Grid from '../components/Grid/Grid'
import HeaderAlternative from '../components/Header/HeaderAlternative'
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
    <Provider store={store}>
    <Grid>
        <HeaderAlternative/>
        <History/>
    </Grid>
    </Provider>
    </>
    )
}

export default HistoryPage