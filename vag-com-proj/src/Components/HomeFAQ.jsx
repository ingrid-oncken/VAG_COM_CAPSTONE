import { Component } from 'react'
import { Accordion, Row, Col, Image } from 'react-bootstrap'
//import { useAccordionToggle } from 'react-bootstrap/AccordionToggle'

class HomeFAQ extends Component {
  render() {
    return (
      <>
        <h1>ACCORDION HERE</h1>
        <Row>
          <Col sm={12} md={12} lg={7}>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  Quais são as Funções da Versão atual do VCDS?
                </Accordion.Header>
                <Accordion.Body>
                  Veja a **Lista de Funções** da versão atual.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  O VCDS é compatível com a Unidade de Comando do Motor com
                  Chip"?
                </Accordion.Header>
                <Accordion.Body>
                  Sim, com a maioria dos chips de companhias com boa reputação.
                  No entanto, tem chips de duvidosa qualidade com os quais não é
                  compatível.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Há uma versão em Português?</Accordion.Header>
                <Accordion.Body>
                  Sim há, temos uma versão em português incluindo com todos os
                  28.976 códigos de avaria.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  É possível utilizar o VCDS um computador desktop?
                </Accordion.Header>
                <Accordion.Body>
                  Sim, para este caso recomendamos a interface sem fio HEX-NET.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>
                  Há uma versão para Mac(iOS) ou Linux?
                </Accordion.Header>
                <Accordion.Body>
                  Sim, porém em inglês, é possível utilizar a nova interface sem
                  fio HEX-NET através do VCDS Mobile.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
          <Col sm={12} md={12} lg={5}>
            <Row>
              <Image src="holder.js/171x180" rounded />
            </Row>
            <Row></Row>
          </Col>
        </Row>
      </>
    )
  }
}
export default HomeFAQ
