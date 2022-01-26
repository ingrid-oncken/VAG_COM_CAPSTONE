import { Component } from 'react'
import { Container } from 'react-bootstrap'
import MainCarousel from './MainCarousel'
import HomeFAQ from './HomeFAQ'

import Buttons from './Buttons'

class MainJumbo extends Component {
  render() {
    return (
      <>
        <Container
          id="jambo-img"
          fluid
          className="d-flex justify-content-center flex-column px-0 jambo-layout"
        ></Container>

        <Container className="main-carousel">
          <MainCarousel />
        </Container>
        <HomeFAQ />
        <Buttons />
        
      </>
    )
  }
}
export default MainJumbo
