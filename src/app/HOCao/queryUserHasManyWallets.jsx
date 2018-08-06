import React, {Component} from 'react'
import compose from 'recompose/compose'
import { connect } from 'react-redux'
import {firestoreConnect, isLoaded} from 'react-redux-firebase'
import _ from 'lodash'

const queryUserHasManyWallets = BaseComponent => {

  class HOC extends Component{
    render() {
      const {wallets} = this.props
      if (isLoaded(wallets)) {
        return (
          <BaseComponent
            {...this.props}
          />
        )
      } else {
        // can be loading too.
        return null
      }
    }
  }

  const mapStateToProps = state => {
    return {
      wallets: state.firestore.ordered.wallets,
    }
  }

  return compose(
    firestoreConnect(props => [
      {
        collection: 'wallets',
        where: ['user_id', '==', props.user_id],
      }
    ]),
    connect(mapStateToProps, null),
  )(HOC);
}

export default queryUserHasManyWallets;

