import { Component } from 'react'
import { Carousel, Col, Row, Image } from 'react-bootstrap'

class MainCarousel extends Component {
  render() {
    return (
      <>
        {/* TRIPPLE IMAGE CAROUSEL */}
        <Row className="justify-content-center">
          <Carousel
            className="d-none d-sm-none d-md-none d-lg-block"
            interval={null}
          >
            <Carousel.Item>
              <Row>
                <Col xs={6} md={4}>
                  <Image
                    className="d-block w-100 img-carousel"
                    src="../img/products/18013.jpeg"
                    rounded
                  />
                </Col>
                <Col xs={6} md={4}>
                  <Image
                    src="../img/products/18037.jpeg"
                    rounded
                    className="d-block w-100 img-carousel"
                  />
                </Col>
                <Col xs={6} md={4}>
                  <Image
                    src="../img/products/20827.png"
                    rounded
                    className="d-block w-100 img-carousel"
                  />
                </Col>
              </Row>
            </Carousel.Item>
            <Carousel.Item>
              <Row>
                <Col xs={6} md={4}>
                  <Image
                    // src="/../img/products/HV2-big_ml.jpeg"
                    src="../img/placeholders/370x420_prod_4.jpg"
                    rounded
                    className="d-block w-100 img-carousel"
                  />
                </Col>
                <Col xs={6} md={4}>
                  <Image
                    // src="../img/products/hv2.jpeg"
                    src="../img/placeholders/370x420_prod_4.jpg"
                    rounded
                    className="d-block w-100 img-carousel"
                  />
                </Col>
                <Col xs={6} md={4}>
                  <Image
                    // src="../img/products/OBDEXT-1A.png"
                    src="../img/placeholders/370x420_prod_4.jpg"
                    rounded
                    className="d-block w-100 img-carousel"
                  />
                </Col>
              </Row>{' '}
            </Carousel.Item>
            <Carousel.Item>
              <Row>
                <Col xs={6} md={4}>
                  <Image
                    src="../img/products/USB2EXTCAB.jpeg"
                    rounded
                    className="d-block w-100 img-carousel"
                  />
                </Col>
                <Col xs={6} md={4}>
                  <Image
                    src="../img/products/usbc_b.jpeg"
                    rounded
                    className="d-block w-100 img-carousel"
                  />
                </Col>
                <Col xs={6} md={4}>
                  <Image
                    src="../img/products/VAS-adapter.jpeg"
                    rounded
                    className="d-block w-100 img-carousel"
                  />
                </Col>
              </Row>
            </Carousel.Item>
          </Carousel>

          {/* SINGLE IMAGE CAROUSEL */}
          <Carousel fade className="d-lg-none d-xl-none text-center">
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
        </Row>
      </>
    )
  }
}
export default MainCarousel
