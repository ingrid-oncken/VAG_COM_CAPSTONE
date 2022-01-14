import { Component } from 'react'
import { Carousel, Card, Row, Image, Col } from 'react-bootstrap'

class MainCarousel extends Component {
  render() {
    return (
      <>
        <Carousel controls={false} indicators={false}>
          <Carousel.Item>
            <Row>
              <Col>
                <Card className="jumbo-card" style={{ width: '18rem' }}>
                  <Card.Img variant="top" src="../img/products/p1.jpeg" />
                </Card>
              </Col>
              <Col>
                <Card className="jumbo-card" style={{ width: '18rem' }}>
                  <Card.Img variant="top" src="../img/products/p2.jpeg" />
                </Card>
              </Col>
              <Col>
                <Card className="jumbo-card" style={{ width: '18rem' }}>
                  <Card.Img variant="top" src="../img/products/p3.jpeg" />
                </Card>
              </Col>
            </Row>
          </Carousel.Item>
          <Carousel.Item>
            <Row>
              <Col>
                <Card className="jumbo-card" style={{ width: '18rem' }}>
                  <Card.Img variant="top" src="../img/products/p4.jpeg" />
                </Card>
              </Col>
              <Col>
                <Card className="jumbo-card" style={{ width: '18rem' }}>
                  <Card.Img variant="top" src="../img/products/p5.jpeg" />
                </Card>
              </Col>
              <Col>
                <Card className="jumbo-card" style={{ width: '18rem' }}>
                  <Card.Img
                    className="img-carousel"
                    variant="top"
                    src="../img/products/p6.jpg"
                  />
                </Card>
              </Col>
            </Row>
          </Carousel.Item>
          <Carousel.Item>
            <Row>
              <Col>
                <Card className="jumbo-card" style={{ width: '18rem' }}>
                  <Card.Img variant="top" src="../img/products/p7.jpeg" />
                </Card>
              </Col>
              <Col>
                <Card className="jumbo-card" style={{ width: '18rem' }}>
                  <Card.Img
                    className="img-carousel"
                    variant="top"
                    src="../img/products/p8.png"
                  />
                </Card>
              </Col>
              <Col>
                <Card className="jumbo-card" style={{ width: '18rem' }}>
                  <Card.Img
                    className="img-carousel"
                    variant="top"
                    src="../img/products/p9.jpeg"
                  />
                </Card>
              </Col>
            </Row>
          </Carousel.Item>
        </Carousel>
        

          {/* SINGLE IMAGE CAROUSEL */}
          {/* <Carousel fade className="d-lg-none d-xl-none text-center">
            <Carousel.Item>
              <img
                src="../img/placeholders/370x420_prod_1.jpg"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src="../img/placeholders/370x420_prod_2.jpg"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src="../img/placeholders/370x420_prod_3.jpg"
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </Row> */}
      </>
    )
  }
}
export default MainCarousel
