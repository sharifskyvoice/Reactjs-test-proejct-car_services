
import React, { Component } from "react";
import items from "./data";
import Client from "./Contentful";

const CarContext = React.createContext();

export default class CarProvider extends Component {
  state = {
    cars: [],
    sortedCars: [],
    featuredCars: [],
    loading: true,
    type: "all",
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    petrol: false,
    diesel: false
  };


  componentDidMount() {
    // this.getData();
    let cars = this.formatData(items);
    let featuredCars = cars.filter(car => car.featured === true);
    //
    let maxPrice = Math.max(...cars.map(item => item.price));
    let maxSize = Math.max(...cars.map(item => item.size));
    this.setState({
      cars,
      featuredCars,
      sortedCars: cars,
      loading: false,
      //
      price: maxPrice,
      maxPrice,
      maxSize
    });
  }

  formatData(items) {
    let tempItems = items.map(item => {
      let id = item.sys.id;
      let images = item.fields.images.map(image => image.fields.file.url);

      let car = { ...item.fields, images, id };
      return car;
    });
    return tempItems;
  }
  getCar = company => {
    let tempCars = [...this.state.cars];    const car = tempCars.find(car => car.company === company );
    return car;
  };
  handleChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    console.log(name, value);

    this.setState(
      {
        [name]: value
      },
      this.filterCars
    );
  };
  filterCars = () => {
    let {
      cars,
      type,
      capacity,
      price,
      minSize,
      maxSize,
      petrol,
      diesel
    } = this.state;

    let tempCars = [...cars];
    // transform values
    // get capacity
    capacity = parseInt(capacity);
    price = parseInt(price);
    // filter by type
    if (type !== "all") {
      tempCars = tempCars.filter(car => car.type === type);
    }
    // filter by capacity
    if (capacity !== 1) {
      tempCars = tempCars.filter( car =>  car.capacity >= capacity);
    }
    // filter by price
    tempCars = tempCars.filter( car=>  car.price <= price);
    //filter by size
    tempCars = tempCars.filter(
      car => car.size >= minSize && car.size <= maxSize
    );
    //filter by petrol
    if (petrol) {
      tempCars = tempCars.filter(car => car.petrol === true);
    }
    //filter by diesel
    if ( diesel) {
      tempCars = tempCars.filter(car => car.diesel === true);
    }
    this.setState({
      sortedCars: tempCars
    });
  };
  render() {
    return (
      <CarContext.Provider
        value={{
          ...this.state,
          getCar: this.getCar,
          handleChange: this.handleChange
        }}
      >
        {this.props.children}
      </CarContext.Provider>
    );
  }
}
const CarConsumer = CarContext.Consumer;

export { CarProvider, CarConsumer, CarContext };

export function withCarConsumer(Component) {
  return function ConsumerWrapper(props) {
    return (
      <CarConsumer>
        {value => <Component {...props} context={value} />}
      </CarConsumer>
    );
  };
}
