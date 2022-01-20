import { Component } from 'react'
import { Card, Container, Image } from 'react-bootstrap'
import MainCarousel from './MainCarousel'

class MainJumbo extends Component {
  render() {
    return (
      
      <>
        <Container id='jambo-img'
          fluid
          className="d-flex justify-content-center flex-column px-0 jambo-layout"
        >
          
        </Container>

        <Container className="main-carousel text-center">
          <MainCarousel />
        </Container>
      </>
    )
  }
}
export default MainJumbo
