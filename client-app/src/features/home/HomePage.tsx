import { Link } from 'react-router-dom'
import { Container } from 'semantic-ui-react'

function HomePage() {
    return (
      <Container style={{marginTop: '7em'}}>
        <div>HomePage</div>        
        <h3>Goto <Link to='/activities'>Activities</Link></h3>
      </Container>
  )
}

export default HomePage