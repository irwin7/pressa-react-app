import styled from "styled-components";
import { Colors, Fonts, Width } from "../../../Variables";

const Wrapper = styled.div`
  border-radius: 30px;
  margin-bottom: 280px;
  padding: 100px 0 250px 0;
  background-color: ${Colors.background_color_white};

  ul {
    margin-bottom: 100px;
    display: grid;
    grid-template-columns: repeat(3, 32%);
    grid-gap: 60px 30px;
    justify-content: start;

    .item {
      box-shadow: 0 0 20px 5px #00000020;
      border-radius: 15px;
      overflow: hidden;
      width: 100%;
      transition: transform 0.3s ease;

      &:hover {
        transform: translateY(-10px);
      }

      .inner {
        padding: 35px;
        background-color: #fff;

        h2 {
          font-size: 24px;
          width: 85%;
          font-weight: 600;
          font-family: ${Fonts.font_infra};
          margin-bottom: 10px;
        }

        h3 {
          font-size: 16px;
          font-style: italic;
          margin-bottom: 24px;
          opacity: 0.8;
        }

        .wrapper {
          padding-top: 20px;
          border-top: 1px solid #00000010;
          display: flex;
          justify-content: space-between;

          span {
            display: flex;
            align-items: center;

            img {
              margin-right: 10px;
            }

            p {
              font-family: ${Fonts.font_infra};
              font-size: 16px;
              font-weight: 400;
              color: #000;
            }
          }
        }
      }
    }

    img {
      vertical-align: middle;
    }
  }
  .btn {
    margin: 0 auto;
    display: flex;
  }

  h1 {
    font-family: ${Fonts.font_infra};
    font-size: 36px;
    margin: 0 auto;
    font-weight: 600;
    color: #000;
    text-align: center;
  }

  @media (max-width: ${Width.max_md}) {
    margin-bottom: 280px;
    ul {
      grid-template-columns: repeat(2, auto);
      grid-gap: 40px 20px;

      .item {
        .inner {
          h2 {
            width: 60%;
            font-size: 18px;
          }
        }
      }
    }

    a {
      font-size: 22px;
    }
  }

  @media (max-width: ${Width.max_sm}) {
    padding: 30px 0 200px 0;
    margin-bottom: 360px;
    ul {
      grid-template-columns: repeat(1, auto);
      grid-gap: 20px 0px;
    }
  }

  a {
    font-size: 18px;
  }
`;

export { Wrapper };
