import React from "react";
import { Container } from "../../Auth/Containers";
import { Footers } from "../../Auth/Footer";
import logo from "../../assets/img/pressa-logo.svg";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <Footers>
      <Container>
        <NavLink to="/">
          <img src={logo} alt="logo" />
        </NavLink>
        <div>
          <ul className="content-list">
            <li>
              <a href="tel:(99)123-45-67">Call center: (99)123-45-67</a>
            </li>
            <li>
              <NavLink to="/add-post">E'lon berish</NavLink>
            </li>
            <li>
              <NavLink to="/about">Loyiha haqida</NavLink>
            </li>
            <li>
              <NavLink to="/faq">FAQ</NavLink>
            </li>
          </ul>
          <ul className="social-list">
            <li>
              <a href="#" target="_blank">
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                <i className="fab fa-telegram-plane"></i>
              </a>
            </li>
          </ul>
        </div>
        <p>© 2022. All rights reserved</p>
      </Container>
    </Footers>
  );
}

export default Footer;
