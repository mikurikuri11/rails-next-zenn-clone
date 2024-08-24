import React from 'react'

type SimpleButtonProps = {
  text: string
  onClick: () => void
}

export const SimpleButton: React.FC<SimpleButtonProps> = (props) => {
  return <button onClick={props.onClick}>{props.text}</button>
}
