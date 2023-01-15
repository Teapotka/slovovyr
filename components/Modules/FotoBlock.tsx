import {FC, ReactNode} from "react";

const FotoBlock:FC<{path: string, alt: string, info: ReactNode, direction: 'left' | 'right'}> = ({path, alt, info, direction}) => {
  return(
      <div className='flex align-c' data-testid='fotoBlockModule' style={{justifyContent: direction}}>
          {
              direction == 'right' ?
                  <>
                  <div className='flex justify-sb padding-rl-10 l-description'
                       style={{textAlign: direction}}> {info} </div>
                  <img className='thumbnail' src={path} alt={alt}/>
                  </>
                      :
                  <>
                      <img className='thumbnail' src={path} alt={alt}/>
                      <div className='flex justify-sb padding-rl-10 l-description'
                           style={{textAlign: direction}}> {info} </div>
                  </>
          }
      </div>

  )
}

export default FotoBlock