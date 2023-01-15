import {FC} from "react";
import Yes from "./Yes";
import No from "./No";
import {TableItemController} from "../../controllers/TableItemController";
const TableItem:FC<{item: TResult}> = ({item}) => {
    const {date, region, time, result} = item
    const regionWord = {
        east: 'СХ',
        west: 'ЗХ',
        center: 'ЦН'
    }
  return(
      <div className='flex table-item' data-testid='tableItemModule'>
        <div className='flex justify-sb align-c margin-b-5'>
            <div>{TableItemController.dateString(new Date(date))}</div>
            <div>{regionWord[region]}</div>
            <div>{TableItemController.timeString(time)}</div>
            {result == 'win' ? <Yes className='flex-center'/> : <No className='flex-center'/>}
        </div>
        <div className='flex line'></div>
      </div>
  )
}

export default TableItem