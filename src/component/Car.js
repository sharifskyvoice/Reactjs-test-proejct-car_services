
import React from "react";
import { Link } from "react-router-dom";
import defaultImg from "../images/car-1.JPG";
import PropTypes from "prop-types";
import { memo } from "react";

const Car = memo(({ car }) => {
  const { name, company, images, price } = car;
   console.log(car);
  return (
    <article className="car">
      <div className="img-container">
        <img src={images[0] || defaultImg} alt="single car" />
        <div className="price-top">
          <h6>${price}</h6>
          {/* <p></p> */}
        </div>
        <Link to={`/cars/${company}`} className="btn-primary car-link">
          features
        </Link>
        <p className="car-info">{name}</p>
      </div>
    
    </article>
  );
});

Car.propTypes = {
  car: PropTypes.shape({
    name: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired
  })
};

export default Car;
