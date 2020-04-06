import React from "react";
import { withCarConsumer } from "../context";
import Loading from "./Loading";
import CarsFilter from "./CarsFilter";
import CarsList from "./CarsList";

function CarContainer({ context }) {
  const { loading, sortedCars, cars } = context;
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <CarsFilter cars={cars} />
      <CarsList cars={sortedCars} />
    </>
  );
}

export default withCarConsumer(CarContainer);

