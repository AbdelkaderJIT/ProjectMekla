import React, {useEffect} from "react";
import { Row, Col, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import classes from "../Sections/HeroThreeSection.module.css";
import HeroThreeContent from "../SectionComponents/HeroThreeContent";
import {useDispatch, useSelector} from "react-redux"
import {getFood} from "../../redux/food/actions"


function Dishes () {



const price=15
  const dispatch = useDispatch();
  const getfooods=()=>{
      dispatch(getFood());
  }
  useEffect(()=>{getfooods();
  console.log("hhhhhhhhhhhhhhhhh");
  },[])

const foodlist= useSelector((state)=>state.food.food.foods)

  //Mapping the data from the object above and storing them in a variable
 const fooding = foodlist !== undefined && foodlist.map((el, i)  => (
    <Col lg={4} className={classes.dish_col}>
      <div
        data-aos="fade-up"
        data-aos-easing="ease-out"
        data-aos-duration="700"
      >
        <HeroThreeContent
          key={i}
          id={el._id}
          name={el.foodName}
          src={el.imgURL}
          price={price}
        />
      </div>
    </Col>
  ));
  
  
  //END

  //Rendering the Hero Three section
  return (
    <section id="dishes">
      <Container>
        <Row
          className={`${classes.row} mx-auto`}
          data-aos="fade-up"
          data-aos-easing="ease-out"
          data-aos-duration="700"
        >
          <Col xs={12}>
            <div className={classes.header_div}>
              <h2>Our daily dishes</h2>
              <p>Check out recommended dishes of your choice</p>
            </div>
          </Col>
        </Row>

        <Row className={classes.row_dish}>{fooding}</Row>

      </Container>
    </section>
  );
  //END
};

export default Dishes
