import React, { useState } from "react";
import { Container } from "../../Auth/Containers";
import { Headers } from "../../Auth/Header";
import { Button, CenterBetween } from "../../Auth/Mixins";
import logo from "../../assets/img/pressa-logo.svg";
import { NavLink } from "react-router-dom";

function Header() {
  const [isActive, setActive] = useState(false);

  function ShowMenu() {
    setActive(!isActive);
  }

  return (
    <Headers>
      <Container>
        <CenterBetween>
          <NavLink to="/">
            <img src={logo} alt="site logo" />
          </NavLink>
          <nav className={isActive ? "show" : ""}>
            <ul>
              <li>
                <NavLink to="/about">Loyiha haqida</NavLink>
              </li>
              <li>
                <NavLink to="/faq">FAQ</NavLink>
              </li>
            </ul>
            <NavLink to="/add-post">
              <Button>E'lon berish</Button>
            </NavLink>
          </nav>
          <button onClick={ShowMenu}>
            <i className="fas fa-bars"></i>
          </button>
        </CenterBetween>
      </Container>
    </Headers>
  );
}

export default Header;
