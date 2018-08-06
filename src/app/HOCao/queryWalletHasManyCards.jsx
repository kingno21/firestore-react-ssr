import React, {Component} from 'react'
import compose from 'recompose/compose'
import { connect } from 'react-redux'
import {isLoaded, firestoreConnect} from 'react-redux-firebase'

const queryWalletHasManyCards = (BaseComponent) => {

  class HOC extends Component{
    render() {
      const {cards} = this.props
      if(isLoaded(cards)) {
        return (
          <BaseComponent
            {...this.props}
          />
        )
      } else {
        // can be loading components here
        return null
      }
    }
  }

  const mapStateToProps = (state, props) => {
    return {
      cards: state.firestore.ordered[`cards_${props.wallet.id}`],
    }
  }

  return compose(
    firestoreConnect(props => [
      {
        collection: 'cards',
        where: ['wallet_id', '==', props.wallet.id],
        storeAs: `cards_${props.wallet.id}`
      }
    ]),
    connect(mapStateToProps, null),
  )(HOC);
}

export default queryWalletHasManyCards;
