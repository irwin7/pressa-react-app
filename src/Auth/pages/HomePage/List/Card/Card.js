import styled from "styled-components";
import { Colors, Fonts } from "../../../../Variables";

const Cards = styled.div`
  background-color: #fff;
  padding: 85px 0;
  border-radius: 30px;
  font-family: ${Fonts.font_infra};
  margin-bottom: 150px;

  .wrapper {
    display: flex;

    .info {
      padding-right: 100px;

      h1 {
        margin-bottom: 50px;
        font-weight: 600;
        font-size: 30px;
      }

      .content {
        margin-bottom: 110px;

        li {
          display: flex;
          align-items: center;
          margin-bottom: 3px;

          p {
            font-size: 30px;
          }

          img {
            width: 50px;
            height: 50px;
            margin-right: 20px;
          }
        }
      }

      h4 {
        margin-bottom: 30px;
        font-weight: 600;
        font-size: 30px;
      }
      .socials {
        display: flex;

        li:not(:last-child) {
          margin-right: 30px;
        }

        a {
          color: ${Colors.color_brown};
          font-size: 30px;
        }
      }
    }

    .desc {
      padding-left: 120px;
      border-left: 2px solid #00000020;

      h3 {
        font-weight: 600;
        font-size: 52px;
        margin-bottom: 13px;
      }

      .info-text {
        font-size: 20px;
        opacity: 0.5;
        margin-bottom: 62px;
      }

      .info-img {
        width: 100%;
        border-radius: 15px;
        height: auto;
        margin-bottom: 70px;
      }

      div {
        margin-bottom: 100px;

        .text {
          font-size: 20px;
          margin-bottom: 24px;
          line-height: 38px;
        }
      }

      ul {
        display: flex;
        align-items: center;

        li {
          display: flex;
          align-items: center;

          &:not(:last-child) {
            margin-right: 26px;
          }

          img {
            margin-right: 8px;
          }
        }
      }
    }
  }
`;

const Slider = styled.div`
  padding-bottom: 225px;
  font-family: ${Fonts.font_infra};

  ul {
    display: flex;
    align-items: center;

    li {
      width: 400px;
      border-radius: 16px;
      overflow: hidden;
      background-color: #fff;

      .inner {
        padding: 35px;

        h2 {
          font-size: 24px;
          font-weight: 600;
          margin-bottom: 12px;
        }

        h3 {
          font-style: italic;
          font-weight: normal;
          font-size: 16px;
          margin-bottom: 24px;
        }

        .wrapper {
          border-top: 1px solid #00000010;
          padding-top: 20px;
          display: flex;
          justify-content: space-between;

          span {
            display: flex;
            align-items: center;

            img {
              margin-right: 10px;
            }
          }
        }
      }

      &:not(:last-child) {
        margin-right: 30px;
      }

      img {
        vertical-align: middle;
      }
    }
  }
`;

export { Cards, Slider };
