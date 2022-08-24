import React, { useEffect, useState } from 'react'
import No from '../../../assets/No'
import Yes from '../../../assets/Yes'
import { processData, readAllData } from '../../../data/localMemory'
import style from './History.module.css'

const History = () => {
  const {item, row} = style
  const [history, sethistory] = useState([{date: '', region: '', time: '', result: false}])
  useEffect(()=>{
    console.log(processData())
    sethistory(processData())
  },[])
  //FIXME: filter empty data
  const regions:any = {west: 'ЗХ',center: 'ЦН',east: 'СХ', '': ''}
  return (
    <div className='l-content-scroll l-history-grid'>
      {history[0].date !=  '' ? history.map(k=><div className={item} key={history.indexOf(k)}>
        <div className={row} >
          <span>{k.date}</span>
          <span>{regions[k.region]}</span>
          <span>{k.time}</span>
          <span>{k.result ? <Yes/> : <No/>}</span>
        </div>
      <div className='line'></div>
      </div>)
      :
      <div className='header-label'>Історія порожня</div>
      }
    </div>
  )
}

export default History