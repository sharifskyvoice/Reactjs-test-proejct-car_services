import React from "react";
import { useContext } from "react";
import { CarContext } from "../context";
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Title from "./Title";
// get all unique values
const getUnique = (items, value) => {
  return [...new Set(items.map(item => item[value]))];
};

const CarsFilter = ({ cars }) => {
  // react hooks
  const context = useContext(CarContext);
  const {
    handleChange,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    petrol,
    diesel
  } = context;

  // get unique types
  let types = getUnique(cars, "type");
  // add all
  types = ["all", ...types];
  // map to jsx
  types = types.map((item, index) => (
    <option key={index} value={item}>
      {item}
    </option>
  ));
  // get unique capacity
  let people = getUnique(cars, "capacity");
  people = people.map((item, index) => (
    <option key={index} value={item}>
      {item}
    </option>
  ));
  return (
    <section className="filter-container">
      <Title title="search cars" />
      <form className="filter-form">
        {/* select type */}
        <div className="form-group">
          <label htmlFor="type">Serch By Name</label>
          <select name="type" id="type" onChange={handleChange} className="form-control" value={type}>
            {types}
              
          </select>
       
        </div>
        {/* end of select type */}
        {/* Capacity  */}
        <div className="form-group">
          <label htmlFor="capacity">Capacity</label>
          <select
            name="capacity"
            id="capacity"
            onChange={handleChange}
            className="form-control"
            value={capacity}
          >
            {people}
          </select>
        </div>
        {/* end of Capacity */}
        {/* car price */}
        <div className="form-group">
          <label htmlFor="price">car price ${price}</label>
          <input
            type="range"
            name="price"
            min={minPrice}
            max={maxPrice}
            id="price"
            value={price}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        {/* end of car price*/}
        {/* size */}
        <div className="form-group">
          <label htmlFor="price">car size </label>
          <div className="size-inputs">
            <input
              type="number"
              name="minSize"
              value={minSize}
              onChange={handleChange}
              className="size-input"
            />
            <input
              type="number"
              name="maxSize"
              value={maxSize}
              onChange={handleChange}
              className="size-input"
            />
          </div>
        </div>
        {/* end of select type */}
        {/* extras */}
        <div className="form-group">
          <div className="single-extra">
            <input
              type="checkbox"
              name="petrol"
              id="petrol"
              checked={petrol}
              onChange={handleChange}
            />
            <label htmlFor="petrol">Petrol</label>
          </div>
          <div className="single-extra">
            <input
              type="checkbox"
              name="diesel"
              checked={diesel}
              onChange={handleChange}
            />
            <label htmlFor="diesel">Diesel</label>
          </div>
        </div>
        {/* end of extras type */}
      </form>
    </section>
  );
};

export default CarsFilter;
