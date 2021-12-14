import { Component } from 'react'
import { Card, Container } from 'react-bootstrap'

class MainJumbo extends Component {
  render() {
    return (
      <Card className="text-dark">
        <Card.Img src="../img/placeholders/1920x700.jpg" alt="car image" />
        <Card.ImgOverlay>
          <Container>
            <Card.Title>VAG-COM DIAGNOSTIC SYSTEM</Card.Title>
            <Card.Text>
              SISTEMA DE DIAGNÓSTICO PARA VOLKSWAGEN, AUDI, SEAT E SKODA
            </Card.Text>
          </Container>
        </Card.ImgOverlay>
      </Card>
    )
  }
}
export default MainJumbo
