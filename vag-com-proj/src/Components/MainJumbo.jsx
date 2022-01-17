import { Component } from 'react'
import { Card, Container } from 'react-bootstrap'
import MainCarousel from './MainCarousel'

class MainJumbo extends Component {
  render() {
    return (
      <Container fluid className="d-flex justify-content-center flex-column">
        <Card className="main-card">
          <div className="jambo-layout">
            <Card.Img
              className="img-jambo"
              src="../img/placeholders/vag_espanol.jpeg"
              alt="car image"
            />
          </div>
        </Card>
        <Container className="main-carousel">
          <MainCarousel />
        </Container>
      </Container>
    )
  }
}
export default MainJumbo
