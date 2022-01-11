import { Component } from 'react'
import { Card, Container } from 'react-bootstrap'

class MainJumbo extends Component {
  render() {
    return (
      <>
        <Card>
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
      </>
    )
  }
}
export default MainJumbo
