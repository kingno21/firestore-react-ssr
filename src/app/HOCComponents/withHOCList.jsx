import compose from 'recompose/compose'
import List from '../components/molecule/list'
import queryWalletHasManyCards from '../HOCao/queryWalletHasManyCards'

const enhance = compose(
  queryWalletHasManyCards
)

export default enhance(List)
