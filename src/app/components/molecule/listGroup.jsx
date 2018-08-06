import React from 'react'
import _ from 'lodash'
import List from '../../HOCComponents/withHOCList'

export default ({wallets}) => {
  return(
    <div>
      {
        _.map(wallets, (w, i) => (
         <List
           wallet={w} 
           key={i}
         />
        ))
      }
    </div>
  )
}

