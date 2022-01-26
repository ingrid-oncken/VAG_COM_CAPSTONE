import { Component } from 'react'
import { Col, Container, ListGroup, Row, Tab } from 'react-bootstrap'
import MainForm from './MainForm'

class Buttons extends Component {
  state = {
    show: 'first',
  }

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
                      <span className="">*** icon here ***</span>
                    </div>
                    <h3>Modron Workshop</h3>
                  </ListGroup.Item>
                  <ListGroup.Item
                    href="#link2"
                    action
                    // onClick={() => this.setState({ show: 'second' })}
                  >
                    <div className="">
                      <span className="">*** icon here ***</span>
                    </div>
                    <h3>Talented workers</h3>
                    <p>
                      Suus satis. Quod etiam optime. Vos ite post eum, fistulae,
                      nunquam
                    </p>
                  </ListGroup.Item>
                  <ListGroup.Item
                    href="#link3"
                    action
                    // onClick={() => this.setState({ show: 'third' })}
                  >
                    <div className="">
                      <span className="">*** icon here ***</span>
                    </div>
                    <h3>Leading auto specialist</h3>
                    <p>
                      Suus satis. Quod etiam optime. Vos ite post eum, fistulae,
                      nunquam
                    </p>
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
                    <p>
                      That god forbid, that made me first your slave, I should
                      in thought control your times of pleasure, Or at your hand
                      the account of hours to crave, Being your vassal, bound to
                      stay your leisure! O! let me suffer, being at your beck,
                      The imprison'd absence of your liberty; And patience, tame
                      to sufferance, bide each check, Without accusing you of
                      injury. Be where you list, your charter is so strong That
                      you yourself may privilage your time
                    </p>
                  </Tab.Pane>
                  <Tab.Pane eventKey="#link3">
                    <p>
                      That god forbid, that made me first your slave, I should
                      in thought control your times of pleasure, Or at your hand
                      the account of hours to crave, Being your vassal, bound to
                      stay your leisure! O! let me suffer, being at your beck,
                      The imprison'd absence of your liberty; And patience, tame
                      to sufferance, bide each check, Without accusing you of
                      injury. Be where you list, your charter is so strong That
                      you yourself may privilage your time
                    </p>
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
