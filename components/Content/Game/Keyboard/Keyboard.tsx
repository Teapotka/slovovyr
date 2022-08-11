import React from 'react'
import Arrow from '../../../../assets/Arrow'

const Keyboard = () => {
    const keys = ['й','ц','у','к','е','н','г','ш','щ','з','х','ї',
                  'ф','і','в','а','п','р','о','л','д','ж','є',<Arrow/>,
                  'ґ','я','ч','с','м','и','т','ь','б','ю']
                  //TODO: Cors, Animejs, Cashe, Data storage
  return (
    <div className='keyboard'>
        {keys.map((k)=><div key={keys.indexOf(k)}>{k}</div>)}
    </div>
  )
}

export default Keyboard