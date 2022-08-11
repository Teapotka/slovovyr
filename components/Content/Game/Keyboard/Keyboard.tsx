import React from 'react'
import Backspace from '../../../../assets/Backspace'
import Enter from '../../../../assets/Enter'

const Keyboard = () => {
    const keys = ['й','ц','у','к','е','н','г','ш','щ','з','х','ї',
                  'ф','і','в','а','п','р','о','л','д','ж','є',<Backspace/>,
                  'ґ','я','ч','с','м','и','т','ь','б','ю', <Enter/>]
                  //TODO: Animejs, Cashe, Data storage
  return (
    <div className='keyboard'>
        {keys.map((k)=><div className='keyboard-item' key={keys.indexOf(k)}>{k}</div>)}
    </div>
  )
}

export default Keyboard