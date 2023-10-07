import React from "react";
import "./Website.css";
import travel1 from '../assets/travel1.jpg';
import travel5 from '../assets/travel5.jpg';
import Navbar from "./Navbar";
import Services from './Services'
import image1 from "../assets/image1.jpg";
import Recomanded from "./Recomanded";
import Testimonials from './Testimonials';
import Footer from './Footer';
import Carousel from 'react-bootstrap/Carousel';

const CombinedComponent = () => {
  return (
    <div>
      <Navbar />
      <div className="hero" id="hero">
      <Carousel>
      <Carousel.Item>
        <div className="images">
        <img src={image1} alt="home-img"  />
        </div>
      
      </Carousel.Item>
      <Carousel.Item>
      <div className="images">
      <img src={travel1} alt="travel1"  />
        </div>
        
      </Carousel.Item>
      <Carousel.Item>
      <div className="images">
      <img src={travel5} alt="travel5"  />
        </div>
      </Carousel.Item>
    </Carousel>

        <div className="content">
          <div className="title">
            <h1>TRAVEL TO EXPLORE</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
              natus, enim ipsam magnam odit deserunt itaque? Minima earum velit
              tenetur!
            </p>
          </div>
          <div className="search">
            <div className="container">
              <label htmlFor="">Where you want to go</label>
              <input type="text" placeholder="Search Your location" />
            </div>
            <div className="container">
              <label htmlFor="">Check-in</label>
              <input type="date" />
            </div>
            <div className="container">
              <label htmlFor="">Check-out</label>
              <input type="date" />
            </div>
            <button>Explore Now</button>
          </div>
        </div>
      </div>
      <Services />
      <Recomanded />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default CombinedComponent;
