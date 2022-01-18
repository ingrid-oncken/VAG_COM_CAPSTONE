import { Component } from 'react'
import {
  ButtonGroup,
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
              <DropdownButton
                as={ButtonGroup}
                align={{ lg: 'end' }}
                title="Left-aligned but right aligned when large screen"
                id="dropdown-menu-align-responsive-1"
              >
                <Dropdown.Item eventKey="1">Action 1</Dropdown.Item>
                <Dropdown.Item eventKey="2">Action 2</Dropdown.Item>
              </DropdownButton>

              {/* CARDS HERE */}
            </Col>
            <Col lg={3} md={4} sm={12}></Col>
          </Row>
        </Container>
      </>
    )
  }
}
export default Store
