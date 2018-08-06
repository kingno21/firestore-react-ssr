import compose from 'recompose/compose'
import ListGroup from '../components/molecule/listGroup'
import queryUserHasManyWallets from '../HOCao/queryUserHasManyWallets'

const enhance = compose(
  queryUserHasManyWallets,
)

export default enhance(ListGroup)
