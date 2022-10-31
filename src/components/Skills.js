import { Col, Container, Row } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import colorSharp from "../assets/img/color-sharp.png"




export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
         
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      return (
        <section className='skills' id='skills'>
            <Container>
                <Row>
                    <Col>
                    <div className='skill-bx'>
                        <h2>
                            Skills
                        </h2>
                        <p>I have skills in React.js, ReactNative, Flutter, Node.js, MangoDB</p>
                        <Carousel responsive={responsive} infinite={true} className="skilll-slider">
                            <div className='item'>
                                <img src={meter1} alt="" />
                                <h5>React.js</h5>

                            </div>
                        
                            <div className='item'>
                                <img src={meter1} alt="" />
                                <h5>ReactNative</h5>

                            </div>
                            <div className='item'>
                                <img src={meter3} alt="" />
                                <h5>Flutter</h5>

                            </div>
                            <div className='item'>
                                <img src={meter2} alt="" />
                                <h5>Node.js</h5>

                            </div>
                            <div className='item'>
                                <img src={meter2} alt="" />
                                <h5>MangoDB</h5>

                            </div>
                        </Carousel>
                    </div>
                    </Col>
                </Row>
            </Container>
            <img src={colorSharp} alt="" className='background-image-left' />
        </section>
      )

}