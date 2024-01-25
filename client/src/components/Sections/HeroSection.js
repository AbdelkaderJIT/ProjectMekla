import React from "react";
import TheButton from "../Ui/TheButton";
import classes from "./HeroSection.module.css";
import { Row, Col, Container } from "react-bootstrap";
import { Link } from "react-scroll";
import "bootstrap/dist/css/bootstrap.min.css";
import FoodImage from "../../assets/image/maxresdefault.png";

const HeroSection = () => {
  //Rendering the Hero section(Landing page) on the DOM
  return (
    <section id="hero">
      <Container>
        <Row className={`${classes.row} mx-auto`}>
          <Col
            lg={6}
            className="p-0"
            data-aos="fade-right"
            data-aos-easing="ease-out"
            data-aos-duration="1500"
          >
            <div className={classes.text__div}>
              <h1>
                Enjoy <span>home made meals</span> far away from home
              </h1>
              <p>
                Helping you enjoy comfortable and healthy food anywhere and
                anytime, Contact us on +216 55 489 865 to start your order.
              </p>

              <Link
                className={classes.order_button}
                to="dishes"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
              >
                
              </Link>
            </div>
          </Col>
          <Col lg={6} className="p-0">
            <div className={`ms-auto`}>
              <img
                className={classes.food__image}
                src={FoodImage}
                fluid="true"
                alt="Food pic"
                data-aos="fade-left"
                data-aos-easing="ease-out"
                data-aos-duration="1500"
              ></img>
            </div>
          </Col>
        </Row>
      </Container>



    

      <Container style={{marginTop:"-50px"}}>
        <Row
          style={{marginLeft:"450px",marginBottom:"50px"}}
          data-aos="fade-up"
          data-aos-easing="ease-out"
          data-aos-duration="700"
          data-aos-delay="150"
        >
          <Col xs={12}>
            <div className={classes.header_div}>
              <h2>Testimonials</h2>
              <p>This is what our client are saying</p>
            </div>
          </Col>
        </Row>

        <Row className={classes.row_content}>
          <Col
            style={{borderStyle:"groove",padding:"10px"}}
            lg={4}
            data-aos="fade-up"
            data-aos-easing="ease-out"
            data-aos-duration="700"
            data-aos-delay="150"
          >
            <div className={`${classes.text_div} px-2`}>
              <h4 className={classes.header_text}>Fadwa Jerbi</h4>
              <p className={classes.text_location}>Paris</p>
              <p className={classes.text_content}>
                The first time I ordered food from Mekla, I had a diarrehea but then
                the second time I had a constipation but the food was delecious I have 
                health issues because of hot choclate at 00:00 am.
              </p>
            </div>
          </Col>

          <Col
          style={{borderStyle:"groove",padding:"10px"}}
            lg={4}
            data-aos="fade-up"
            data-aos-easing="ease-out"
            data-aos-duration="700"
            data-aos-delay="150"
          >
            <div className={`${classes.text_div} px-2`}>
              <h4 className={classes.header_text}>Zeineb Sfaxy</h4>
              <p className={classes.text_location}>tunis </p>
              <p className={classes.text_content}>
                {" "}
               I ordered nananya and then I ate the nananya and it was very delecious,
               because nananya from mekla is very good.{" "}
              </p>
            </div>
          </Col>

          <Col
          style={{borderStyle:"groove",padding:"10px"}}
            lg={4}
             data-aos="fade-up"
            data-aos-easing="ease-out"
            data-aos-duration="700"
            data-aos-delay="150"
          >
            <div className={`${classes.text_div} px-2`}>
              <h4 className={classes.header_text}>Lilia BelKadhy</h4>
              <p className={classes.text_location}>Jandouba</p>
              <p className={classes.text_content}>
               I ate from Mekla makrouna and it was spicy just how I like it and it was special
               because nananya lover zeineb showed me the way queen, princhech nananya lover
               bezbez jerbi. {" "}
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    
    </section>
    
  );
  //END
};

export default HeroSection;
