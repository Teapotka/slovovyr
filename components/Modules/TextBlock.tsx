import {FC, ReactNode} from "react";

const TextBlock:FC<{text: ReactNode | string, className: string}> = ({text, className}) => {
  return (
      <div className={className} data-testid='textBlockModule'>
          {text}
      </div>
  )
}

export default TextBlock