import { Component } from 'react'
import { Button, Accordion, Row, Card, Col, Image } from 'react-bootstrap'
import { FaAngleDown } from 'react-icons/fa'

class HomeFAQ extends Component {
  render() {
    return (
      <>
        <span className="blue-title my-2">
          <h5 className="font-italic">Tem Dúvidas?</h5>
        </span>
        <h3 className="text-body gray-title mb-4">Perguntas Frequentes</h3>
        <Row>
          <Col sm={12} md={12} lg={7}>
            <Accordion eventKey="0">
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="0">
                    Quais são as Funções da Versão atual do VCDS?
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    Veja a **Lista de Funções** da versão atual.
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="1">
                    O VCDS é compatível com a Unidade de Comando do Motor com
                    Chip"?
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>
                    Sim, com a maioria dos chips de companhias com boa
                    reputação. No entanto, tem chips de duvidosa qualidade com
                    os quais não é compatível.
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="2">
                    Há uma versão em Português?
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="2">
                  <Card.Body>
                    Sim há, temos uma versão em português inclusive com todos os
                    28.976 códigos de avaria.
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="3">
                    É possível utilizar o VCDS em um computador desktop?
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="3">
                  <Card.Body>
                    Sim, para este caso recomendamos a interface sem fio
                    HEX-NET.
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </Col>
          <Col sm={12} md={12} lg={5}>
            <Row className="justify-content-center">
              <Image
                className="d-none d-lg-block"
                src="../img/placeholders/faq (1).png"
                rounded
              />
            </Row>
            {/* <Row></Row> */}
          </Col>
        </Row>
      </>
    )
  }
}
export default HomeFAQ
