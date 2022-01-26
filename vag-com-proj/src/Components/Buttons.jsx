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
                    <div className="">
                      <span className="">
                        <FaAt />
                      </span>
                    </div>
                    <h3>Ainda tem dúvidas?</h3>
                    <p>Escreva-nos uma mensagem.</p>
                  </ListGroup.Item>
                  <ListGroup.Item
                    href="#link2"
                    action
                    // onClick={() => this.setState({ show: 'second' })}
                  >
                    <div className="">
                      <span className="">
                        <FaLaptop />
                      </span>
                    </div>
                    <h3>Simulador Virtual</h3>
                    <p>Simulação interativa com imagens reais.</p>
                  </ListGroup.Item>
                  <ListGroup.Item
                    href="#link3"
                    action
                    // onClick={() => this.setState({ show: 'third' })}
                  >
                    <div className="">
                      <span className="">
                        <FaKey />
                      </span>
                    </div>
                    <h3>VagTacho</h3>
                    <p>Sistema programador de chaves.</p>
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
                    <Card>
                      <Card.Header>VagTacho</Card.Header>
                      <Col md={4}>
                        <Card.Img src="../img/products/vag_tacho.jpeg" />
                      </Col>
                      <Col md={8}>
                        <Card.Body>
                          <Card.Title>
                            Completo, incluindo programador de transponderes.
                          </Card.Title>
                          <Card.Text>
                            VagTacho é um sistema para adaptar chaves, ler
                            códigos secretos de imobilizadores e programar os
                            transpondedores das chaves. Esta é a versão europeia
                            completa lançada em maio 2018
                          </Card.Text>
                          <Button variant="primary">Loja</Button>
                        </Card.Body>
                      </Col>
                      <Card.Footer className="text-muted">
                        Acesse a loja maiores detalhes deste produto.
                      </Card.Footer>
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
