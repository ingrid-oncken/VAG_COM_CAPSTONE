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
          <Card.ImgOverlay>
            <Container className="">
              <Card.Title>
                <h1 className="text-white">VAG-COM DIAGNOSTIC SYSTEM</h1>
              </Card.Title>
              <Card.Text>
                <h3 className="text-white">
                  SISTEMA DE DIAGNÓSTICO PARA VOLKSWAGEN, AUDI, SEAT E SKODA
                </h3>
              </Card.Text>
            </Container>
          </Card.ImgOverlay>
        </Card>
        <Container className="main-carousel">
          <MainCarousel />
        </Container>
      </Container>
    )
  }
}
export default MainJumbo
