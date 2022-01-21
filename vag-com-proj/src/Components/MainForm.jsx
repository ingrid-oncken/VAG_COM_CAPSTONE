import { Component } from 'react'
import {
  Col,
  Card,
  Form,
  Button,
  Row,
  FormControl,
  Image,
  InputGroup,
  Container,
} from 'react-bootstrap'

class MainForm extends Component {
  render() {
    return (
      <section className="form-section mt-5 pt-5">
        <Container>
          <Row className="align-items-center flex-column">
            <span className="">
              <Image src="../img/vag-com_icon.png" />
            </span>
            <Card text="dark" className="my-5 rounded-0 shadow-sm">
              <Card.Header className="text-white rounded-0">
                <Card.Title className="mt-1">
                  {' '}
                  Ainda tem dúvidas? Envie-nos uma mensagem!
                </Card.Title>
              </Card.Header>
              <Card.Body>
                <Card.Text>
                  <Form>
                    <Form.Group controlId="exampleForm.ControlNamearea">
                      <Form.Label>Nome</Form.Label>
                      <Form.Control as="textarea" rows={1} />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlInput1">
                      <Form.Label className="mt-3">e-mail</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="nome@exemplo.com"
                      />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                      <Form.Label className="mt-4">Mensagem</Form.Label>
                      <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                    <Button className="mt-4" variant="primary" type="submit">
                      Enviar
                    </Button>
                  </Form>
                </Card.Text>
              </Card.Body>
            </Card>
          </Row>
        </Container>
      </section>
    )
  }
}
export default MainForm
