import React, { useEffect, useState } from 'react'
import No from '../../../assets/No'
import Yes from '../../../assets/Yes'
import { processData, readAllData } from '../../../data/localMemory'

const History = () => {
  const [history, sethistory] = useState([{date: '', region: '', time: '', result: false}])
  useEffect(()=>{
    console.log(processData())
    sethistory(processData())
  },[])
  //FIXME: filter empty data
  const regions:any = {west: 'ЗХ',center: 'ЦН',east: 'СХ', '': ''}
  return (
    <div className='history-grid'>
      {history.map(k=><div className='history-item' key={history.indexOf(k)}>
        <div className='history-row'>
          <span>{k.date}</span>
          <span>{regions[k.region]}</span>
          <span>{k.time}</span>
          <span>{k.result ? <Yes/> : <No/>}</span>
        </div>
      <div className='horizontal-line-alt'></div>
      </div>)}
    </div>
  )
}

export default History