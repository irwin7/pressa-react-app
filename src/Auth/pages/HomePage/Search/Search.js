import styled from "styled-components";
import { Colors, Fonts, Width } from "../../../Variables";

const Wrapper = styled.div`
  z-index: 1;
  padding: 90px 110px 100px 110px;
  border-radius: 30px;
  background-color: ${Colors.background_color_white};
  margin-bottom: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  div {
    width: 70%;
    margin: 0 auto;

    h1 {
      font-family: ${Fonts.font_infra};
      font-weight: 700;
      font-size: 52px;
      margin-bottom: 50px;
      text-align: center;
    }
  }

  form {
    width: 100%;
    position: relative;
    z-index: 1;
    margin-bottom: 60px;

    input {
      width: 100%;
      padding: 25px 380px 25px 42px;
      border-radius: 15px;
      font-size: 22px;
      font-family: ${Fonts.font_infra};
      background-color: #fff;
      border: none;

      &::-webkit-search-cancel-button {
        display: none;
      }

      &:focus {
        outline-color: ${Colors.color_brown};
      }

      &::placeholder {
        color: ${Colors.color_black};
        opacity: 0.3;
      }
    }

    span {
      position: absolute;
      top: 50%;
      right: 42px;
      height: 100%;
      transform: translateY(-50%);

      button {
        transform: translateY(100%);
        background-color: transparent;
        border: none;
        font-weight: 500;
        font-size: 22px;
        font-family: ${Fonts.font_infra};
        color: ${Colors.color_black};
        opacity: 0.15;

        &:first-child:hover {
          color: #000;
          opacity: 1;
        }

        &:last-child {
          border-left: 3px solid #000;
          padding-left: 30px;
        }

        &:not(:last-child) {
          margin-right: 30px;
        }
      }
    }
  }

  @media (max-width: ${Width.max_md}) {
    padding: 60px 80px;
    border-radius: 20px;
    margin-bottom: 40px;

    div {
      width: 85%;

      h1 {
        font-size: 40px;
        margin-bottom: 35px;
      }
    }

    form {
      input {
        border-radius: 10px;
        font-size: 18px;
        padding: 20px 300px 20px 30px;
      }

      span {
        button {
          font-size: 18px;

          &:last-child {
            border-left: 2px solid #000;
            padding-left: 20px;
          }

          &:not(:last-child) {
            margin-right: 20px;
          }
        }
      }
    }
  }

  @media (max-width: ${Width.max_xs}) {
    padding: 30px 20px;
    border-radius: 10px;
    margin-bottom: 20px;

    div {
      width: 100%;

      h1 {
        font-size: 24px;
        margin-bottom: 25px;
      }
    }

    form {
      input {
        border-radius: 10px;
        font-size: 14px;
        padding: 15px;
      }

      span {
        top: 24px;
        right: 20px;
        transform: translateY(-50%);

        button {
          font-size: 14px;

          &:last-child {
            border-left: none;
            padding-left: 20px;
          }

          &:not(:last-child) {
            display: none;
          }
        }
      }
    }
  }
`;

export { Wrapper };
