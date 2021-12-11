import { Component } from 'react'
import { Container, Carousel, Col, Row, Image } from 'react-bootstrap'

class MainCarousel extends Component {
  render() {
    return (
      <Container>
        <Carousel>
          <Carousel.Item>
            <Row>
              <Col xs={6} md={4}>
                <Image
                  className="d-block w-100"
                  src="https://shop.strato.de/WebRoot/Store19/Shops/64059577/5165/F295/12B0/CA06/ACBE/C0A8/28BC/AED7/20161005_204718_watermarked_vag-com-espanol_m_www.watermark.ws.jpg/171x180"
                  rounded
                />
              </Col>
              <Col xs={6} md={4}>
                <Image
                  src="https://shop.strato.de/WebRoot/Store19/Shops/64059577/5887/E706/2B7E/0E12/2C87/C0A8/2ABB/C1FB/HV2-big.jpg"
                  rounded
                  className="d-block w-100"
                />
              </Col>
              <Col xs={6} md={4}>
                <Image
                  src="https://shop.strato.de/WebRoot/Store19/Shops/64059577/5887/F56A/DF0C/B633/F857/C0A8/2ABB/CA70/HV2-big.jpg"
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
                  src="https://shop.strato.de/WebRoot/Store19/Shops/64059577/5165/F295/12B0/CA06/ACBE/C0A8/28BC/AED7/20161005_204718_watermarked_vag-com-espanol_m_www.watermark.ws.jpg"
                  rounded
                  className="d-block w-100"
                />
              </Col>
              <Col xs={6} md={4}>
                <Image
                  src="https://shop.strato.de/WebRoot/Store19/Shops/64059577/5887/E706/2B7E/0E12/2C87/C0A8/2ABB/C1FB/HV2-big.jpg/171x180"
                  rounded
                  className="d-block w-100"
                />
              </Col>
              <Col xs={6} md={4}>
                <Image
                  src="https://shop.strato.de/WebRoot/Store19/Shops/64059577/5887/F56A/DF0C/B633/F857/C0A8/2ABB/CA70/HV2-big.jpg/171x180"
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
                  src="https://shop.strato.de/WebRoot/Store19/Shops/64059577/5165/F295/12B0/CA06/ACBE/C0A8/28BC/AED7/20161005_204718_watermarked_vag-com-espanol_m_www.watermark.ws.jpg/171x180"
                  rounded
                  className="d-block w-100"
                  height="100px"
                />
              </Col>
              <Col xs={6} md={4}>
                <Image
                  src="https://shop.strato.de/WebRoot/Store19/Shops/64059577/5887/E706/2B7E/0E12/2C87/C0A8/2ABB/C1FB/HV2-big.jpg/171x180"
                  rounded
                  className="d-block w-100"
                  height="100px"
                />
              </Col>
              <Col xs={6} md={4}>
                <Image
                  src="https://shop.strato.de/WebRoot/Store19/Shops/64059577/5887/F56A/DF0C/B633/F857/C0A8/2ABB/CA70/HV2-big.jpg/171x180"
                  rounded
                  className="d-block w-100"
                  height="100px"
                />
              </Col>
            </Row>
          </Carousel.Item>
        </Carousel>
      </Container>
    )
  }
}
export default MainCarousel
