import React, { useEffect, useState } from 'react'
import Backspace from '../../../../assets/Backspace'
import Enter from '../../../../assets/Enter'
import enter from '../Field/FieldSubmit'
import clear from '../Field/FieldClear'
import input from '../Field/FieldInput'
import { useDispatch } from 'react-redux'
import { toggle } from '../../../../store/modalSlice'

const Keyboard = () => {
  const [result, setresult] = useState(null)
const dispatch = useDispatch()
useEffect(()=>{
  if(result != null){
  result ?       
  dispatch(toggle('win'))
  :
  dispatch(toggle('lose'))
}
},[result]);

    const keys = ['й','ц','у','к','е','н','г','ш','щ','з','х','ї',
                  'ф','і','в','а','п','р','о','л','д','ж','є',<Backspace/>,
                  'ґ','я','ч','с','м','и','т','ь','б','ю', <Enter/>]
                  //TODO: Animejs, Cashe, Data storage
                  useEffect(()=>{
                    window.onkeyup = (e) => {
                      if(e.key.length > 1){
                            //@ts-ignore
                            document.getElementById(e.key.toLowerCase()+'SVG')?.parentElement.click()
                          }
                          else{
                            document.getElementById(e.key)?.click()
                          }
    
                          console.log(e)
                    }
                  },[])
  const handle = (e:React.MouseEvent<HTMLDivElement>) =>{
    const selector = e.currentTarget
    if(selector.children.length){
      console.log(selector.children)
      switch(selector.children[0].id){
        case 'enterSVG':
          console.log('enter')
          enter(setresult)
          break
        case 'backspaceSVG':
          console.log('backspace')
          clear()
          break
      }
      return null
    }
    console.log(selector.innerHTML)
    input(selector.innerHTML)
  }
  return (
    <div className='keyboard'>
        {keys.map((k)=><div className='keyboard-item' id={k.toString().length < 2 ? `${k}` : undefined} onClick={(e)=>handle(e)} key={keys.indexOf(k)}>{k}</div>)}
    </div>
  )
}

export default Keyboard