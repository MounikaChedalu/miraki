import React from "react";
import "./Testimonials.css"; 
import avatarImage from "../assets/avatarImage.jpeg";

const Testimonials=()=> {
  return (
    <section id="testimonials" class="container">
        <div class="title">
            <h2>Happy Customers</h2>
        </div>
        <div class="total-part">
            <div class="testimonial">
                <div class="frst-part">
                    <div class="scnd-part">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate asperiores eaque.</p>
                        <img src={avatarImage} alt="avatar" />
                        <h4>Kishan Sheth</h4>
                        <span>CEO-Shashaan Web Solutions</span>    
                    </div>
                </div>
                <div class="frst-part">
                    <div class="scnd-part">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate asperiores eaque.</p>
                        <img src={avatarImage} alt="avatar" />
                        <h4>Kishan Sheth</h4>
                        <span>CEO-Shashaan Web Solutions</span>    
                    </div>
                </div>
                <div class="frst-part">
                    <div class="scnd-part">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate asperiores eaque.</p>
                        <img src={avatarImage} alt="avatar" />
                        <h4>Kishan Sheth</h4>
                        <span>CEO-Shashaan Web Solutions</span>    
                    </div>
                </div>
            </div>
        </div>
      </section>
  );
}
export default Testimonials;
