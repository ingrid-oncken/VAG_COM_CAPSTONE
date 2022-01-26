import { Component } from 'react'
import SidebarStore from './SidebarStore'

import {
  Button,
  ButtonGroup,
  Card,
  Col,
  Container,
  Dropdown,
  DropdownButton,
  Image,
  Row,
} from 'react-bootstrap'

class Store extends Component {
  render() {
    return (
      <>
        <Image src="../img/pageHeader3.jpg" fluid />
        <Container>
          <Row>
            <Col lg={9} md={12} sm={12}>
              <Row>
                <div className="d-flex justify-content-end mt-5">
                  <DropdownButton
                    as={ButtonGroup}
                    align="end"
                    title="Filtrar"
                    id="dropdown-menu-align-responsive-1"
                    variant="outline-secondary"
                  >
                    <Dropdown.Item eventKey="1">Nome</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Preço</Dropdown.Item>
                  </DropdownButton>
                </div>
                <div className="d-flex justify-content-between my-3">
                  <Col lg={4} md={6} sm={12}>
                    <Card style={{ width: '15rem' }} className="shadow">
                      <Card.Img
                        variant="top"
                        src="../img/placeholders/370x420_prod_1.jpg"
                      />
                      <Card.Body className="text-center">
                        <Card.Title>Product Name</Card.Title>
                        <Card.Text>Brief description of the product.</Card.Text>
                        <Button variant="secondary">Comprar</Button>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col lg={4} md={6} sm={12}>
                    <Card style={{ width: '15rem' }} className="shadow">
                      <Card.Img
                        variant="top"
                        src="../img/placeholders/370x420_prod_1.jpg"
                      />
                      <Card.Body className="text-center">
                        <Card.Title>Product Name</Card.Title>
                        <Card.Text>Brief description of the product.</Card.Text>
                        <Button variant="secondary">Comprar</Button>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col lg={4} md={6} sm={12}>
                    <Card style={{ width: '15rem' }} className="shadow">
                      <Card.Img
                        variant="top"
                        src="../img/placeholders/370x420_prod_1.jpg"
                      />
                      <Card.Body className="text-center">
                        <Card.Title>Product Name</Card.Title>
                        <Card.Text>Brief description of the product.</Card.Text>
                        <Button variant="secondary">Comprar</Button>
                      </Card.Body>
                    </Card>
                  </Col>
                </div>
              </Row>
            </Col>
            <SidebarStore />
          </Row>
        </Container>
      </>
    )
  }
}
export default Store
