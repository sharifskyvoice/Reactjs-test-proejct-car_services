
import React from 'react';
import { Link } from "react-router-dom";
import Hero from "../component/Hero";
import Banner from "../component/Banner";
import Carousel from 'react-bootstrap/Carousel';
import  Services from "../component/Services";
import  FeaturedCars from "../component/FeaturedCars";
export default function Home(){
return (   
    <>

      <Carousel>
        <Carousel.Item>
          <Hero>
            <div className="defaultHero1"/>
          </Hero>
          <Carousel.Caption>
            <Banner title="WELCOME TO CAR MART" subtitle="Featured Cars">
                <Link to="/cars" className="btn-primary" > Search </Link>
            </Banner>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Hero>
            <div className="defaultHero2"/>
          </Hero>
          <Carousel.Caption>
            <Banner title="WELCOME TO CAR MART" subtitle="Featured Cars">
                <Link to="/cars" className="btn-primary"> Search </Link>
            </Banner>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Hero>
            <div className="defaultHero3"/>
          </Hero>
          <Carousel.Caption>
            <Banner title="WELCOME TO CAR MART" subtitle="Featured Cars">
                <Link to="/cars" className="btn-primary"> Search </Link>
            </Banner>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Services/>
      <FeaturedCars/>
    </>
   );
 }
