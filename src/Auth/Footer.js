import styled from "styled-components";
import { Colors, Fonts, Width } from "./Variables";

const Footers = styled.footer`
  padding: 60px 0;
  background-color: #fff;

  img {
    margin-bottom: 18px;
  }

  div {
    p {
      font-family: ${Fonts.font_infra};
      color: ${Colors.color_black};
      opacity: 0.6;
      font-size: 16px;
    }

    div {
      margin-bottom: 30px;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .content-list {
        display: flex;
        align-items: center;

        li {
          &:hover a {
            color: ${Colors.color_brown};
          }

          a {
            font-size: 22px;
            color: ${Colors.color_black};
            font-family: ${Fonts.font_dinpro};
          }
        }

        li:not(:last-child) {
          margin-right: 90px;
        }
      }

      .social-list {
        display: flex;
        align-items: center;

        li {
          &:hover a {
            color: ${Colors.color_brown};
          }

          a {
            font-size: 22px;
            color: ${Colors.color_black};
          }
        }

        li:not(:last-child) {
          margin-right: 30px;
        }
      }
    }
  }

  @media (max-width: ${Width.max_sm}) {
    padding: 40px 0;
    text-align: center;

    img {
      width: 90px;
    }

    div {
      p {
        font-size: 16px;
      }

      div {
        flex-direction: column;

        .content-list {
          flex-direction: column;
          margin-bottom: 20px;

          li {
            a {
              font-size: 18px;
            }
          }

          li:not(:last-child) {
            margin-bottom: 15px;
            margin-right: 0px;
          }
        }

        .social-list {
          display: flex;
          align-items: center;

          li {
            a {
              font-size: 18px;
              color: ${Colors.color_black};
            }
          }
        }
      }
    }
  }

  @media (max-width: ${Width.max_xs}) {
    padding: 30px 0;
    text-align: center;

    img {
      width: 60px;
    }

    div {
      p {
        font-size: 14px;
      }

      div {
        flex-direction: column;

        .content-list {
          flex-direction: column;
          margin-bottom: 20px;

          li {
            a {
              font-size: 16px;
            }
          }

          li:not(:last-child) {
            margin-bottom: 15px;
            margin-right: 0px;
          }
        }

        .social-list {
          display: flex;
          align-items: center;

          li {
            a {
              font-size: 16px;
              color: ${Colors.color_black};
            }
          }
        }
      }
    }
  }
`;

export { Footers };
