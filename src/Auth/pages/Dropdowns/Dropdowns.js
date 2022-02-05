import styled from "styled-components";
import { Colors, Fonts, Width } from "../../Variables";

const Dropdown = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  text-align: center;

  .item {
    display: flex;
    align-items: center;
    padding: 0 60px;
    height: 22px;
    position: relative;

    button {
      font-family: Din Pro;
      font-size: 22px;
      color: #030303;
      font-weight: 500;
    }

    &:not(:last-child) {
      border-right: 1px solid;
    }

    .authors-list {
      position: absolute;
      top: 50px;
      left: 0;
      z-index: 20;
      border-radius: 5px;
      background-color: #fff;
      padding: 20px;
      box-shadow: 20px 30px 64px rgba(0, 0, 0, 0.17);

      li {
        padding: 12px 8px;

        &:hover {
          background-color: ${Colors.background_color};
        }

        button {
          font-size: 16px;
        }
      }
    }

    .inner {
      position: absolute;
      top: 50px;
      width: 630px;
      display: flex;
      background-color: #fff;
      padding: 65px 50px;
      border-radius: 5px;
      max-height: 400px;
      overflow-y: auto;
      box-shadow: 20px 30px 64px rgba(0, 0, 0, 0.17);

      &::-webkit-scrollbar {
        display: none;
      }
      .category-list {
        width: 200px;
        overflow-y: auto;
        border-right: 1px solid #00000020;

        &::-webkit-scrollbar {
          display: none;
        }

        .category-item {
          margin-right: 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 12px 8px;

          button {
            font-size: 22px;
          }

          &:hover {
            background-color: ${Colors.background_color};
          }

          &:hover i {
            opacity: 1;
          }

          i {
            opacity: 0;
          }

          .category-btn {
            padding-right: 50px;
          }
        }
      }
      .sub-category-list {
        padding-left: 20px;
        flex-wrap: wrap;
        flex-direction: column;
        display: flex;

        .sub-category-item {
          display: flex;
          margin-right: 60px;
          padding: 8px 8px;

          button {
            display: flex;
            width: 100%;
            font-size: 16px;
          }

          &:hover {
            background-color: ${Colors.background_color};
          }
        }

        &::-webkit-scrollbar {
          display: none;
        }
      }
    }

    #category {
      width: 170px;
    }

    #author {
      width: 170px;
    }
  }

  .date {
    font-family: ${Fonts.font_dinpro};
    font-size: 22px;
    color: ${Colors.color_black};
    font-weight: 500;
  }

  input::-webkit-datetime-edit {
    display: none;
  }

  input {
    font-family: ${Fonts.font_dinpro};
    font-size: 22px;
    color: ${Colors.color_black};
    font-weight: 500;
    cursor: pointer;
    top: 0;
    color: ${Colors.color_brown};
    border: none;
    background-color: transparent;
    outline: none;
  }

  button {
    display: flex;
    align-items: flex-end;
    outline: none;
    font-family: ${Fonts.font_dinpro};
    font-size: 22px;
    color: ${Colors.color_black};
    font-weight: 400;
    border: none;
    background-color: transparent;

    .fal {
      margin-left: 10px;
      font-size: 18px;
    }
  }

  .btn {
    background-color: ${Colors.color_brown};
    color: #fff;
  }

  @media (max-width: ${Width.max_md}) {
    flex-flow: row wrap;

    li:nth-child(1),
    li:nth-child(2) {
      margin-bottom: 20px;
    }

    li:nth-child(2) {
      width: auto;
      border-right: none;
    }

    li {
      #category,
      #author {
        width: 230px;
      }
    }
  }

  @media (max-width: ${Width.max_xs}) {
    li:nth-child(1),
    li:nth-child(3) {
      margin-bottom: 20px;
      border-right: none;

      label {
        width: 100%;
      }
    }

    li {
      #category,
      #author {
        width: 100%;
      }
    }
    .date {
      font-size: 16px;
    }

    input::-webkit-datetime-edit {
      display: none;
    }

    input {
      font-size: 16px;
    }

    select {
      font-size: 16px;
    }
  }
`;

const Checkbox = styled.div`
  .checkbox-label {
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: row-reverse;
    width: 150px;
    outline-color: ${Colors.color_brown};
    font-family: ${Fonts.font_dinpro};
    font-size: 22px;
    color: ${Colors.color_black};
    font-weight: 500;

    &::before {
      content: "";
      width: 70px;
      height: 35px;
      border-radius: 35px;
      background-color: ${Colors.color_grey};
      display: inline-block;
      margin-left: 10px;
      overflow: hidden;
    }

    &::after {
      content: "";
      position: absolute;
      top: 0px;
      right: 0px;
      width: 35px;
      height: 35px;
      display: inline-block;
      background-color: ${Colors.color_brown};
      border-radius: 31px;
      transition: right 0.1s ease;
    }
  }

  .checkbox:checked + .checkbox-label::after {
    right: 36px;
    background-color: #fff;
  }

  .checkbox:checked + .checkbox-label::before {
    border-color: ${Colors.color_brown};
  }

  .checkbox {
    display: none;
  }

  @media (max-width: ${Width.max_xs}) {
    .checkbox-label {
      font-size: 16px;

      &::before {
        width: 40px;
        height: 22px;
      }

      &::after {
        top: 3px;
        width: 16px;
        height: 16px;
      }
    }

    .checkbox:checked + .checkbox-label::after {
      right: 21px;
    }
  }
`;

const Wrapper = styled.div`
  
  display: flex,
  justify-content: center
`;

export { Dropdown, Checkbox, Wrapper };
