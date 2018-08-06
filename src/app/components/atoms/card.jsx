import React from 'react'

export default ({card, key}) => {
  return (
    <div
      key={key}
    >
      {card.name}
    </div>
  )
}
