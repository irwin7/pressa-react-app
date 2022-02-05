import styled from "styled-components";
import { Fonts, Width } from "../../../Variables";

const Asides = styled.aside`
  position: relative;

  ul {
    position: absolute;
    top: 120px;
    display: grid;
    grid-template-columns: repeat(2, auto);
    grid-gap: 30px;

    li {
      background-color: #fff;
      padding: 50px;
      box-shadow: 26px 34px 64px rgba(61, 45, 38, 0.25);
      border-radius: 15px;

      &:nth-child(2) img {
        width: 74px;
        height: 53px;
      } 

      img {
        margin-bottom: 25px;
      }

      span {
        display: inline-block;
        width: 100%;
        height: 5px;
        background: linear-gradient(
          90deg,
          #734e3f 7.19%,
          #f9d7b6 42.95%,
          #734e3f 84.33%
        );
        border-radius: 5px;
        margin-bottom: 15px;
      }

      h4 {
        font-size: 30px;
        font-family: ${Fonts.font_infra};
        font-weight: 700;
        color: #000;
        margin-bottom: 40px;
      }

      p {
        font-size: 22px;
        font-family: ${Fonts.font_infra};
        font-weight: 400;
        color: #000;
      }
    }
  }

  @media (max-width: ${Width.max_md}) {
    ul {
      top: 60px;

      li {
        padding: 30px;

        img {
          width: 40px;
        }

        h4 {
          font-size: 22px;
          margin-bottom: 25px;
        }

        p {
          font-size: 18px;
        }
      }
    }
  }

  @media (max-width: ${Width.max_xs}) {
    ul {
      grid-template-columns: repeat(1, auto);

      li {
        padding: 20px;

        img {
          width: 30px;
          margin-bottom: 10px;
        }

        h4 {
          font-size: 18px;
          margin-bottom: 25px;
        }

        p {
          font-size: 16px;
        }
      }
    }
  }
`;

export { Asides };
