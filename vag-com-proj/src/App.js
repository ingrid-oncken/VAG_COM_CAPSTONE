import MainNavBar from './Components/MainNavBar'
import MainJumbo from './Components/MainJumbo'

import HomeFAQ from './Components/HomeFAQ'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { Container } from 'react-bootstrap'

function App() {
  return (
    <>
      <div>
        <MainNavBar />
        <MainJumbo />
        <Container className="mt-5">
          <HomeFAQ />
        </Container>
      </div>
    </>
  )
}

export default App
