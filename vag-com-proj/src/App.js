import MainNavBar from './Components/MainNavBar'
import MainJumbo from './Components/MainJumbo'
import MainForm from './Components/MainForm'

import HomeFAQ from './Components/HomeFAQ'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { Container } from 'react-bootstrap'
import Footer from './Components/Footer'

function App() {
  return (
    <>
      <div>
        <MainNavBar />
        <MainJumbo />
        <Container className="mt-5">
          <HomeFAQ />
          <MainForm />
        </Container>
        <Footer />
      </div>
    </>
  )
}

export default App
