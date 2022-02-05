import styled from "styled-components";
import { Colors, Fonts, Width } from "./Variables";

const Headers = styled.header`
  padding: 40px 0;
  margin-bottom: 50px;
  font-family: ${Fonts.font_dinpro};
  background-color: ${Colors.background_color};
  box-shadow: 0 0 5px 1px #00000050;

  img {
    width: 115px;
    height: 50px;
  }
  nav {
    display: flex;
    align-items: center;
    margin-left: auto;

    ul {
      margin-left: auto;
      display: flex;

      li:not(:last-child) {
        margin-right: 40px;
      }
    }

    a {
      font-weight: 400;
      font-size: 22px;
      color: ${Colors.color_black};
    }

    button {
      font-weight: 400;
      margin-left: 60px;
    }
  }

  button {
    border: none;
  }

  button i {
    font-size: 22px;
    color: ${Colors.color_brown};
    display: none;
  }

  @media (max-width: ${Width.max_md}) {
    padding: 30px 0;

    img {
      width: 90px;
      height: 35px;
    }

    nav {
      display: none;
      transform: translateX(100%);
      transition: transform 0.3s ease;

      ul {
        flex-direction: column;
        margin: 0 auto;

        li:not(:last-child) {
          margin-right: 0px;
        }

        li {
          margin-bottom: 30px;
        }
      }

      button {
        margin-left: 0;
      }
    }

    button i {
      display: block;
    }
  }

  .show {
    position: absolute;
    top: 99px;
    left: 0;
    width: 100%;
    height: 100vw;
    display: block;
    transform: translateX(0%);
    z-index: 10;
    flex-direction: column;
    padding-top: 50px;
    /* text-align: center; */
    background-color: ${Colors.background_color};
    transition: transform 0.3s ease;

    ul {
      text-align: center;
    }
    button {
      display: flex;
      margin: 0 auto;
    }
  }

  @media (max-width: ${Width.max_xs}) {
    padding: 20px 0;

    img {
      width: 60px;
      height: auto;
    }

    .show {
      top: 60px;
    }

    button i {
      font-size: 18px;
    }
  }
`;

export { Headers };
