import { Component } from 'react'
import {
  Col,
  Card,
  Form,
  Button,
  FormControl,
  InputGroup,
} from 'react-bootstrap'

class MainForm extends Component {
  render() {
    return (
      <Col xs={12} md={12} lg={7}>
        <Card
          text="dark"
          className="my-5
        "
        >
          <Card.Header className="bg-primary text-white">
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
                  <Form.Control type="email" placeholder="nome@exemplo.com" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Label className="mt-4">Mensagem</Form.Label>
                  <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Button className="mt-4" variant="primary" type="submit">
                  Enviar
                </Button>
              </Form>

              {/* <InputGroup className="mb-3">
<InputGroup className="mb-3">
                <FormControl
                  placeholder="Nome"
                  aria-label="Nome"
                  aria-describedby="basic-addon2"
                />

                <InputGroup.Prepend>
                  <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  placeholder="Username"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>

              
                <InputGroup.Append>
                  <InputGroup.Text id="basic-addon2">
                    @example.com
                  </InputGroup.Text>
                </InputGroup.Append>
              </InputGroup>

              <label htmlFor="basic-url">Your vanity URL</label>
                  
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text>Escreva aqui sua mensagem...</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl as="textarea" aria-label="Mensagem" />
              </InputGroup> */}
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    )
  }
}
export default MainForm
