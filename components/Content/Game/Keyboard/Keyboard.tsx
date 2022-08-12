import React from 'react'
import Backspace from '../../../../assets/Backspace'
import Enter from '../../../../assets/Enter'
import enter from '../Field/FieldSubmit'
import clear from '../Field/FieldClear'
import input from '../Field/FieldInput'

const Keyboard = () => {
    const keys = ['й','ц','у','к','е','н','г','ш','щ','з','х','ї',
                  'ф','і','в','а','п','р','о','л','д','ж','є',<Backspace/>,
                  'ґ','я','ч','с','м','и','т','ь','б','ю', <Enter/>]
                  //TODO: Animejs, Cashe, Data storage
  const handle = (e:React.MouseEvent<HTMLDivElement>) =>{
    const selector = e.currentTarget
    if(selector.children.length){
      console.log(selector.children)
      switch(selector.children[0].id){
        case 'enterSVG':
          console.log('enter')
          enter()
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