import { Component } from 'react'
import { Card, Form } from 'react-bootstrap'

class MainForm extends Component {
  render() {
    return (
      <>
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
              </Form>
            </Card.Text>
          </Card.Body>
        </Card>
      </>
    )
  }
}
export default MainForm
