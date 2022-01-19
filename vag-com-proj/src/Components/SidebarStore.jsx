import { Component } from 'react'
import { FaSearch } from 'react-icons/fa'
import { Col, Button, Form, ListGroup, FormControl } from 'react-bootstrap'

class SidebarStore extends Component {
  render() {
    return (
      <Col lg={3} md={4} sm={12}>
        <Form inline className="mt-5 d-flex justify-content-between">
          <FormControl
            type="text"
            placeholder="Pesquisar"
            className=" mr-sm-2"
          />
          <Button variant="secondary" type="submit">
            <FaSearch />
          </Button>
        </Form>
        <ListGroup className="mt-3">
          <ListGroup.Item>Cras justo odio</ListGroup.Item>
          <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item>Morbi leo risus</ListGroup.Item>
          <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
          <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup>
      </Col>
    )
  }
}
export default SidebarStore
