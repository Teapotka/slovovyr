import classNames from 'classnames'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Cross from '../../assets/Cross'
import { RootState } from '../../store'
import { toggle } from '../../store/modalSlice'
import style from './Modals.module.css'

const InfoModal = () => {
  const {template, info, cross, header, label,
    center, content, comment, field,
    field_item,intro, row } = style
  const dispatch = useDispatch()
  const controllers = useSelector((state: RootState) => state.animations)
  useEffect(() => {
    setTimeout(() => {
      document.querySelector('.modal')?.classList.add('anim-appear')
    })
  }, [])
  const close = () => {
    document.querySelector('.modal')?.classList.remove('anim-appear')
    document.querySelector('.modal')?.classList.add('anim-hide')
    setTimeout(() => {
      dispatch(toggle('none'))
      console.log('before click')
    }, 800)
  }
  return (
    <div className={classNames('border',template, info)}>
      <div className={header}>
        <div className={label}>Як грати</div>
        <div className={cross} onClick={close}><Cross /></div>
      </div>
      <div className={content}>
        <div className={intro}>
          Ви повинні вгадати приховане слово за 6 спроб,
          і колір букв зміниться, щоб показати, наскільки ви близькі.<br /><br />
          Щоб почати гру, просто введіть будь-яке слово, наприклад:</div>
        <div className={field}>
          <div className={classNames(field_item, 'is-wrong')}>з</div>
          <div className={classNames(field_item, 'is-right')}>е</div>
          <div className={classNames(field_item, 'is-wrong')}>м</div>
          <div className={classNames(field_item, 'is-semiright')}>л</div>
          <div className={classNames(field_item, 'is-wrong')}>я</div>
        </div>
        <div>
          <div className={row}>
            <div className={classNames(field_item, 'is-right is-mini')}>е</div>
            <span className={comment}>є в слові і стоїть на правильній позиціЇ</span>
          </div>
          <div className={row}>
            <div className={classNames(field_item, 'is-semiright is-mini')}>л</div>
            <span className={comment}>є в слові, але стоїть не на своїй позиціі</span>
          </div>
          <div className={row}>
            <div className={classNames(field_item, 'is-wrong is-mini')}>з</div>
            <div className={classNames(field_item, 'is-wrong is-mini')}>м</div>
            <div className={classNames(field_item, 'is-wrong is-mini')}>я</div>
            <span className={comment}>немає в слові</span>
          </div>
        </div>
        <div>
          <div className={field}>
            <div className={classNames(field_item, 'is-right')}>л</div>
            <div className={classNames(field_item, 'is-right')}>е</div>
            <div className={classNames(field_item, 'is-wrong')}>м</div>
            <div className={classNames(field_item, 'is-wrong')}>і</div>
            <div className={classNames(field_item, 'is-wrong')}>ш</div>
          </div>
          <div className={classNames(comment, 'is-example')}>майже</div>
        </div>
        <div>
          <div className={field}>
            <div className={classNames(field_item, 'is-right')}>л</div>
            <div className={classNames(field_item, 'is-right')}>е</div>
            <div className={classNames(field_item, 'is-right')}>н</div>
            <div className={classNames(field_item, 'is-right')}>ч</div>
            <div className={classNames(field_item, 'is-right')}>а</div>
          </div>
          <div className={classNames( comment,'is-example')}>перемога !</div>
        </div>
        <div className={center}>Слова оновлюються щоденно</div>
      </div>

      {
          /* 
          
          
            <div className={classNames( field,'is-example')}>
                <div className={classNames(field_item, 'is-right')}>л</div>
                <div className={classNam  <div className={example}>
            <div className={classNames( field,'is-example')}>
                <div className={classNames(field_item, 'is-right')}>л</div>
                <div className={classNames(field_item, 'is-right')}>е</div>
                <div className={classNames(field_item, 'is-wrong')}>м</div>
                <div className={classNames(field_item, 'is-wrong')}>і</div>
                <div className={classNames(field_item, 'is-wrong')}>ш</div>
            </div>
            <div className={classNames( comment,'is-example')}>майже</div>es(field_item, 'is-right')}>е</div>
                <div className={classNames(field_item, 'is-right')}>н</div>
                <div className={classNames(field_item, 'is-right')}>ч</div>
                <div className={classNames(field_item, 'is-right')}>а</div>
            </div>
            <div className={classNames( comment,'is-example')}>перемога !</div>
            </div>
            </div>
            <div className={word}>Слова оновлюються щоденно</div> */}
    </div>
  )
}

export default InfoModal