import React from "react";
import "./Footer.css";
import { BsLinkedin, BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";

export default function Footer() {
  return (
    <footer className="footer-container">
      <span>Copyright &copy; 2021 Travelo. All rights reserved</span>
      <ul className="links">
        <li>
          <a href="#hero">Home</a>
        </li>
        <li>
          <a href="#services">About</a>
        </li>
        <li>
          <a href="#recommend">Places</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
      </ul>
      <ul className="social-links">
        <li>
          <BsFacebook />
        </li>
        <li>
          <AiFillInstagram />
        </li>
        <li>
          <BsLinkedin />
        </li>
      </ul>
    </footer>
  );
}
