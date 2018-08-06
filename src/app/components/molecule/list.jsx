import React from 'react'
import Card from '../atoms/card'
import _ from 'lodash'

export default ({cards}) => {
  return(
    <ul>
      {
        _.map(cards, (c, i) => (
          <Card 
            card={c}
            key={i}
          />
        ))
      }
    </ul>
  )
}

