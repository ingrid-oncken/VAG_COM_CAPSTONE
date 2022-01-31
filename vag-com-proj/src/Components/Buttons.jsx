import { Component } from 'react'
import {
  Button,
  Card,
  Col,
  Container,
  ListGroup,
  Image,
  Row,
  Tab,
} from 'react-bootstrap'
import MainForm from './MainForm'
import { FaAt, FaLaptop, FaKey } from 'react-icons/fa'

class Buttons extends Component {
  // state = {
  //   show: 'first',
  // }

  render() {
    return (
      <section className="form-section my-5 py-5">
        <Container id="tab-container">
          <Tab.Container defaultActiveKey="#link1">
            <Row>
              <Col lg={5} md={12} sm={12}>
                <ListGroup as="ul" className="rounded-0">
                  <ListGroup.Item
                    href="#link1"
                    action

                    // onClick={() => this.setState({ show: 'first' })}
                  >
                    <Row>
                      <Col sm={2}>
                        <span className="font-icon">
                          <FaAt />
                        </span>
                      </Col>
                      <Col sm={10}>
                        <div>
                          <h3>Ainda tem dúvidas?</h3>
                        </div>
                        <div>
                          <p>Escreva-nos uma mensagem.</p>
                        </div>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item
                    href="#link2"
                    action
                    // onClick={() => this.setState({ show: 'second' })}
                  >
                    <Row>
                      <Col sm={2}>
                        <div className="font-icon">
                          <FaLaptop />
                        </div>
                      </Col>
                      <Col sm={10}>
                        {' '}
                        <div className="d-flex">
                          <h3>Simulador Virtual</h3>
                        </div>
                        <p>Simulação interativa com imagens reais.</p>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item
                    href="#link3"
                    action
                    // onClick={() => this.setState({ show: 'third' })}
                  >
                    <Row>
                      <Col sm={2}>
                        <span className="font-icon">
                          <FaKey />
                        </span>
                      </Col>
                      <Col sm={10}>
                        <div className="d-flex">
                          <h3>VagTacho</h3>
                        </div>
                        <div>
                          <p>Sistema programador de chaves.</p>
                        </div>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                </ListGroup>
              </Col>
              <Col lg={7} md={12} sm={12}>
                {/* {this.state.show === 'first' ? (
              <div>
                <h5>DIV ONE</h5>
              </div>
            ) : this.state.show === 'second' ? (
              <div>
                <h5>DIV 2</h5>
              </div>
            ) : (
              <div>
                <h5>DIV 3</h5>
              </div>
            )} */}
                <Tab.Content>
                  <Tab.Pane eventKey="#link1">
                    <MainForm />
                  </Tab.Pane>
                  <Tab.Pane eventKey="#link2">
                    <Col md={11}>
                      <Image src="../img/tela_principal_vcds.gif" thumbnail />
                    </Col>
                  </Tab.Pane>
                  <Tab.Pane eventKey="#link3">
                    <Card className="rounded-0">
                      <Card.Header>VagTacho</Card.Header>
                      <Row>
                        <Col
                          md={4}
                          className="align-self-center d-flex pl-4 pr-0 mb-5 pb-4"
                        >
                          <Card.Img
                            className="rounded-0 img-thumbnail"
                            src="../img/products/vag_tacho.jpeg"
                            alt="vag tacho picture"
                          />
                        </Col>
                        <Col md={8}>
                          <Card.Body>
                            <Card.Title>
                              Completo, incluindo programador de transponderes.
                            </Card.Title>
                            <Card.Text>
                              VagTacho é um sistema para adaptar chaves, ler
                              códigos secretos de imobilizadores e programar os
                              transpondedores das chaves. Esta é a versão
                              europeia completa lançada em maio 2018
                              <hr />
                              <small className="text-muted small d-block">
                                Para maiores detalhes deste produto acesse nossa
                                loja.
                              </small>
                            </Card.Text>
                            <Button variant="primary" className="rounded-0">
                              Loja
                            </Button>
                          </Card.Body>
                        </Col>
                      </Row>
                    </Card>
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </Container>
      </section>
    )
  }
}
export default Buttons
