import { useRouter } from 'next/router'
import React, { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Arrow from '../../assets/Arrow'
import Info from '../../assets/Info'
import Logo from '../../assets/Logo'
import Settings from '../../assets/Settings'
import { RootState } from '../../store'
import { toggle } from '../../store/modalSlice'

const HeaderTemp:FC<{type: 'landing'|'game'|'alternative'}> = ({type}) => {    
  const router = useRouter()
  const dispatch = useDispatch()
  const remove = useSelector((state: RootState)=>state.animations.remove)
const handle = () =>{
    if(router.pathname == '/game'){
        remove('#timer')
    }
    router.push('/')
}
  return (
  <>
    <div className={`temp-l-template temp-l-header-${type}`}>
        <div className='temp-l-navigation'>
            {
            type == 'landing' ?
            <>
            <div onClick={()=>router.push('/about')}>про нас</div>
            <div onClick={()=>router.push('/history')}>історія</div>
            <div onClick={()=>router.push('/server')}>апі</div>
            </>
            :
            <div className='temp-center-box' onClick={()=>{handle()}}>
                <Arrow/>
            </div>
            }
        </div>
        {
            type != 'landing' &&
            <div className='temp-l-logo'>
                <Logo/>
            </div>
        }
        <div className='temp-l-icons'>
            {
                type == 'game' ?
                <>
                <div className='temp-center-box' onClick={()=>dispatch(toggle('info'))}>
                <Info/>
                </div>
                <div className='temp-center-box' onClick={()=>dispatch(toggle('settings'))}>
                <Settings/>
                </div>
                </>
                :
                <div className='temp-center-box' onClick={()=>dispatch(toggle('settings'))}>
                    <Settings/>
                </div>
            }
        </div>
    </div>
  </>
  )
}

export default HeaderTemp