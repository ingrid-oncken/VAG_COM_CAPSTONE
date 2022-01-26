import { Component } from 'react'
import { Card, Form, Button, Row, Image, Container } from 'react-bootstrap'

class MainForm extends Component {
  render() {
    return (
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
        <div className="d-flex justify-content-end">
          <Button className="mt-3 rounded-0" variant="primary" type="submit">
            Enviar
          </Button>
        </div>
      </Form>
    )
  }
}
export default MainForm
