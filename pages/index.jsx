import { withFirestore } from 'react-redux-firebase'
import Container from '../src/app/components/organism/body'

const Index = ({firestore}) => {

  return (
    <Container />
  )
}

export default withFirestore(Index)
