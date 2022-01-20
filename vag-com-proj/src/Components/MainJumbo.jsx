import { Component } from 'react'
import { Card, Container, Image } from 'react-bootstrap'
import MainCarousel from './MainCarousel'

class MainJumbo extends Component {
  render() {
    return (
      // <Container fluid className="d-flex justify-content-center flex-column">
      //   <Card className="main-card">
      //     <div className="jambo-layout">
      //       <Card.Img
      //         className="img-jambo"
      //         src="../img/placeholders/vag_espanol.jpeg"
      //         alt="car image"
      //       />
      //     </div>
      //   </Card>
      //   <Container className="main-carousel text-center">
      //     <MainCarousel />
      //   </Container>
      // </Container>

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
