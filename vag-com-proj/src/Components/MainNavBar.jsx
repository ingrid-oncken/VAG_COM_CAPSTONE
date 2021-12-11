import { Component } from 'react'
import { Navbar, Container, NavDropdown, Nav } from 'react-bootstrap'
import { AiOutlineShoppingCart } from 'react-icons/ai'

class MainNavBar extends Component {
  render() {
    return (
      <Navbar bg="light" expand="lg" sticky="top">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src="http://www.vag-com-portugues.com/VCDS_logo.bmp"
              height="80"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Funções</Nav.Link>
              <Nav.Link href="#link">Simulador Virtual</Nav.Link>
              <Nav.Link href="#link">Registro</Nav.Link>
              <Nav.Link href="#link">Downloads</Nav.Link>
              <Nav.Link href="#link">Interfaces</Nav.Link>
              <Nav.Link href="#link">Falsificações</Nav.Link>
              <NavDropdown title="FAQ" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.2">
                  Perguntas frequentes
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Português" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.2">Español</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Italiano</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">English</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Deutsch</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#link">
                <AiOutlineShoppingCart />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
  }
}

export default MainNavBar
