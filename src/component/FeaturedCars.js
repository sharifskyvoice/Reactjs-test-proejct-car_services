 import React, { Component } from "react";
import Title from "./Title";
import {CarContext } from "../context";
import Car from "./Car";
import Loading from "./Loading";

export default class FeaturedCars extends Component {
static contextType = CarContext;

  render() {
    let { loading, featuredCars:cars} = this.context;
    console.log(cars);
     cars = cars.map(car => {
      return <Car key={car.id} car={car} />;
    });
    return (
      <section className="featured-cars">
        <Title title="featured cars" />
        <div className="featured-cars-center">
          {loading ? <Loading /> : cars}
        </div>
      </section>
    );
  }
}
