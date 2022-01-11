import { Component } from 'react'
import { Carousel, Card, Row, Image, Col } from 'react-bootstrap'

class MainCarousel extends Component {
  render() {
    return (
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
      // <>
      //   {/* TRIPPLE IMAGE CAROUSEL */}
      //   <Row className="justify-content-center">
      //     <Carousel
      //       className="d-none d-sm-none d-md-none d-lg-block"
      //       interval={null}
      //     >
      //       <Carousel.Item>
      //         <Row>
      //           <Col xs={6} md={4}>
      //             <Image
      //               className="d-block w-100 img-carousel"
      //               src="../img/products/p1.jpeg"
      //               rounded
      //             />
      //           </Col>
      //           <Col xs={6} md={4}>
      //             <Image
      //               src="../img/products/p2.jpeg"
      //               rounded
      //               className="d-block w-100 img-carousel"
      //             />
      //           </Col>
      //           <Col xs={6} md={4}>
      //             <Image
      //               src="../img/products/p3.jpeg"
      //               rounded
      //               className="d-block w-100 img-carousel"
      //             />
      //           </Col>
      //         </Row>
      //       </Carousel.Item>
      //       <Carousel.Item>
      //         <Row>
      //           <Col xs={6} md={4}>
      //             <Image
      //               // src="/../img/products/HV2-big_ml.jpeg"
      //               src="../img/products/p4.jpeg"
      //               rounded
      //               className="d-block w-100 img-carousel"
      //             />
      //           </Col>
      //           <Col xs={6} md={4}>
      //             <Image
      //               // src="../img/products/hv2.jpeg"
      //               src="../img/products/p5.jpeg"
      //               rounded
      //               className="d-block w-100 img-carousel"
      //             />
      //           </Col>
      //           <Col xs={6} md={4}>
      //             <Image
      //               // src="../img/products/OBDEXT-1A.png"
      //               src="../img/products/p6.jpg"
      //               rounded
      //               className="d-block w-100 img-carousel"
      //             />
      //           </Col>
      //         </Row>
      //       </Carousel.Item>
      //       <Carousel.Item>
      //         <Row>
      //           <Col xs={6} md={4}>
      //             <Image
      //               src="../img/products/p7.jpeg"
      //               rounded
      //               className="d-block w-100 img-carousel"
      //             />
      //           </Col>
      //           <Col xs={6} md={4}>
      //             <Image
      //               src="../img/products/p8.png"
      //               rounded
      //               className="d-block w-100 img-carousel"
      //             />
      //           </Col>
      //           <Col xs={6} md={4}>
      //             <Image
      //               src="../img/products/p9.jpeg"
      //               rounded
      //               className="d-block w-100 img-carousel"
      //             />
      //           </Col>
      //         </Row>
      //       </Carousel.Item>
      //     </Carousel>

      //     {/* SINGLE IMAGE CAROUSEL */}
      //     <Carousel fade className="d-lg-none d-xl-none text-center">
      //       <Carousel.Item>
      //         <img
      //           src="../img/placeholders/370x420_prod_1.jpg"
      //           alt="First slide"
      //         />
      //       </Carousel.Item>
      //       <Carousel.Item>
      //         <img
      //           src="../img/placeholders/370x420_prod_2.jpg"
      //           alt="Second slide"
      //         />
      //       </Carousel.Item>
      //       <Carousel.Item>
      //         <img
      //           src="../img/placeholders/370x420_prod_3.jpg"
      //           alt="Third slide"
      //         />
      //       </Carousel.Item>
      //     </Carousel>
      //   </Row>
      // </>
    )
  }
}
export default MainCarousel
