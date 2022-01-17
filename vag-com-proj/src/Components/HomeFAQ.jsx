import { Component } from 'react'
import { Accordion, Row, Col, Image } from 'react-bootstrap'
import { FaAngleDown } from 'react-icons/fa'

class HomeFAQ extends Component {
  render() {
    return (
      <>
        <h1 className="text-dark">Perguntas Frequentes</h1>

        <Row>
          <Col sm={12} md={12} lg={7}>
            <Accordion>
              <Accordion.Item eventKey="0" className="acordion-question">
                <Accordion.Header>
                  <span>
                    <FaAngleDown />
                  </span>
                  <p>Quais são as Funções da Versão atual do VCDS?</p>
                </Accordion.Header>
                <Accordion.Body>
                  <span className="ml-5"></span>
                  <p>Veja a **Lista de Funções** da versão atual.</p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1" className="acordion-question">
                <Accordion.Header>
                  <span>
                    <FaAngleDown />
                  </span>
                  O VCDS é compatível com a Unidade de Comando do Motor com
                  Chip"?
                </Accordion.Header>
                <Accordion.Body>
                  <span className="ml-5"></span>
                  <p>
                    Sim, com a maioria dos chips de companhias com boa
                    reputação. No entanto, tem chips de duvidosa qualidade com
                    os quais não é compatível.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2" className="acordion-question">
                <Accordion.Header>
                  <span>
                    <FaAngleDown />
                  </span>
                  Há uma versão em Português?
                </Accordion.Header>
                <Accordion.Body>
                  <span className="ml-5"></span>
                  <p>
                    Sim há, temos uma versão em português incluindo com todos os
                    28.976 códigos de avaria.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3" className="acordion-question">
                <Accordion.Header>
                  <span>
                    <FaAngleDown />
                  </span>
                  É possível utilizar o VCDS um computador desktop?
                </Accordion.Header>
                <Accordion.Body>
                  <span className="ml-5"></span>
                  <p>
                    Sim, para este caso recomendamos a interface sem fio
                    HEX-NET.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4" className="acordion-question">
                <Accordion.Header>
                  <span>
                    <FaAngleDown />
                  </span>
                  <p>Há uma versão para Mac(iOS) ou Linux?</p>
                </Accordion.Header>
                <Accordion.Body>
                  <span className="ml-5"></span>
                  <p>
                    Sim, porém em inglês, é possível utilizar a nova interface
                    sem fio HEX-NET através do VCDS Mobile.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
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
            <Row></Row>
          </Col>
        </Row>
      </>
    )
  }
}
export default HomeFAQ
