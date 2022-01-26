import { Component } from 'react'
import { Navbar, Container, NavDropdown, Nav } from 'react-bootstrap'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { Link } from 'react-router-dom'

class MainNavBar extends Component {
  render() {
    return (
      <Navbar expand="lg" bg="light" sticky="top">
        <Container className="align-items-stretch">
          <Navbar.Brand href="#home">
            <img
              src="../img/SVG/vag-com_logo.svg"
              height="70"
              className="d-inline-block align-top"
              alt="Logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="align-items-stretch"
          >
            <Nav className="ml-auto align-items-center">
              <Link to="/" className="nav-link nav-active">
                Home
              </Link>
              <Nav.Link href="#link">Funções</Nav.Link>

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

              <Link to="/store" className="nav-link">
                <AiOutlineShoppingCart />
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
  }
}

export default MainNavBar

//{/* <Nav.Link href="#link">Simulador Virtual</Nav.Link> */}

// {
//   /* <Link to="/roberta">
//                 <div className="nav-link">Roberta!</div>
//               </Link> */
// }
