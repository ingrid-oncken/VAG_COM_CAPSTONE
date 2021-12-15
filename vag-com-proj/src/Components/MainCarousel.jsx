import { Component } from 'react'
import { Carousel, Col, Row, Image } from 'react-bootstrap'

class MainCarousel extends Component {
  render() {
    return (
      <>
        {/* TRIPPLE IMAGE CAROUSEL */}
        {/* className="d-none d-sm-none d-md-none d-lg-block" */}
        <Row className="justify-content-center d-none d-sm-none d-md-none d-lg-block">
          <Carousel>
            <Carousel.Item>
              <Row>
                <Col xs={6} md={4}>
                  <Image
                    className="d-block w-100"
                    src="../img/placeholders/370x420_prod_1.jpg"
                    rounded
                  />
                </Col>
                <Col xs={6} md={4}>
                  <Image
                    src="../img/placeholders/370x420_prod_2.jpg"
                    rounded
                    className="d-block w-100"
                  />
                </Col>
                <Col xs={6} md={4}>
                  <Image
                    src="../img/placeholders/370x420_prod_3.jpg"
                    rounded
                    className="d-block w-100"
                  />
                </Col>
              </Row>
            </Carousel.Item>
            <Carousel.Item>
              <Row>
                <Col xs={6} md={4}>
                  <Image
                    src="../img/placeholders/370x420_prod_4.jpg"
                    rounded
                    className="d-block w-100"
                  />
                </Col>
                <Col xs={6} md={4}>
                  <Image
                    src="../img/placeholders/370x420_prod_5.jpg"
                    rounded
                    className="d-block w-100"
                  />
                </Col>
                <Col xs={6} md={4}>
                  <Image
                    src="../img/placeholders/370x420_prod_6.jpg"
                    rounded
                    className="d-block w-100"
                  />
                </Col>
              </Row>{' '}
            </Carousel.Item>
            <Carousel.Item>
              <Row>
                <Col xs={6} md={4}>
                  <Image
                    src="../img/placeholders/370x420_prod_7.jpg"
                    rounded
                    className="d-block w-100"
                  />
                </Col>
                <Col xs={6} md={4}>
                  <Image
                    src="../img/placeholders/370x420_prod_8.jpg"
                    rounded
                    className="d-block w-100"
                  />
                </Col>
                <Col xs={6} md={4}>
                  <Image
                    src="../img/placeholders/370x420_prod_9.jpg"
                    rounded
                    className="d-block w-100"
                  />
                </Col>
              </Row>
            </Carousel.Item>
          </Carousel>
        </Row>
        {/* className="d-lg-none d-xl-none" */}
        {/* SINGLE IMAGE CAROUSEL */}
        <Row className="justify-content-center d-lg-none d-xl-none">
          <Carousel fade>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="../img/placeholders/370x420_prod_1.jpg"
                //alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="../img/placeholders/370x420_prod_2.jpg"
                //alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="../img/placeholders/370x420_prod_3.jpg"
                //alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </Row>
      </>
    )
  }
}
export default MainCarousel
