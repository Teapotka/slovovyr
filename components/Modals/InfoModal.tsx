import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Cross from '../../assets/Cross'
import { RootState } from '../../store'
import { toggle } from '../../store/modalSlice'

const InfoModal = () => {
    const dispatch = useDispatch()
    const controllers = useSelector((state: RootState) => state.animations)
    const close = () => {
      console.log('before click')
    //   document.getElementById('logo')!.click() 
    // controllers.play()
      dispatch(toggle('none'))   
    }
    return (
      <div className='info-modal'>
          <div className='header-modal'>
              <div className='label-modal'>Як грати</div>
              <div className='cross-modal' onClick={close}><Cross/></div>
          </div>
          <div className='info-content-modal'>
            <div className='intro-modal'>
            Ви повинні вгадати приховане слово за 6 спроб, 
            і колір букв зміниться, щоб показати, наскільки ви близькі.<br/><br/>
            Щоб почати гру, просто введіть будь-яке слово, наприклад:
            <div className='field-modal'>
                <div className='field-item-modal is-wrong'>з</div>
                <div className='field-item-modal is-right'>е</div>
                <div className='field-item-modal is-wrong'>м</div>
                <div className='field-item-modal is-semiright'>л</div>
                <div className='field-item-modal is-wrong'>я</div>
            </div>
            </div>
            <div className='rules-modal'>
                <div className='row-modal'>
                <div className='field-item-modal is-right is-mini'>е</div> 
                <span className='comment-modal'>є в слові і стоїть на правильній позиціЇ</span>
                </div>
                <div className='row-modal'>
                <div className='field-item-modal is-semiright is-mini'>л</div> 
                <span className='comment-modal'>є в слові, але стоїть не на своїй позиціі</span>
                </div>
                <div className='row-modal'>
                <div className='field-item-modal is-wrong is-mini'>з</div> 
                <div className='field-item-modal is-wrong is-mini'>м</div> 
                <div className='field-item-modal is-wrong is-mini'>я</div> 
                <span className='comment-modal'>немає в слові</span>
                </div>
            </div>
            <div className='example-modal'>
            <div className='field-modal is-example'>
                <div className='field-item-modal is-right'>л</div>
                <div className='field-item-modal is-right'>е</div>
                <div className='field-item-modal is-wrong'>м</div>
                <div className='field-item-modal is-wrong'>і</div>
                <div className='field-item-modal is-wrong'>ш</div>
            </div>
            <div className='comment-modal is-example'>майже</div>
            <div className='field-modal is-example'>
                <div className='field-item-modal is-right'>л</div>
                <div className='field-item-modal is-right'>е</div>
                <div className='field-item-modal is-right'>н</div>
                <div className='field-item-modal is-right'>ч</div>
                <div className='field-item-modal is-right'>а</div>
            </div>
            <div className='comment-modal is-example'>перемога !</div>
            </div>
            </div>
            <div className='info-word'>Слова оновлюються щоденно</div>
          </div>
    )
}

export default InfoModal