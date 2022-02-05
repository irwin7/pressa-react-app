import styled from "styled-components";
import { Colors, Fonts } from "../../Variables";

const Wrapper = styled.div`
  input,
  select,
  textarea {
    padding: 20px 10px;
    background-color: rgba(115, 78, 63, 0.08);
    border-radius: 5px;
    border: none;
  }

  font-family: ${Fonts.font_infra};

  form {
    .user-info {
      background-color: #fff;
      border-radius: 30px;
      padding: 80px 100px;
      margin-bottom: 10px;

      .row {
        display: flex;
        align-items: center;

        div {
          font-size: 20px;
          font-weight: 500;
          display: flex;
          align-items: center;
          margin-bottom: 20px;

          &:first-child {
            margin-right: 50px;
          }

          label {
            margin-right: 10px;
          }
        }
      }
    }
    div {
      .info {
        padding-top: 20px;
        border-top: 1px solid #00000010;
        display: flex;

        div {
          &:not(:last-child) {
            margin-right: 70px;
          }

          input {
            margin-bottom: 20px;
          }

          div {
            display: flex;
            flex-direction: column;

            label {
              margin-bottom: 5px;
              width: 100%;
            }

            input {
              width: 350px;
            }
          }
        }
      }
    }
    .content {
      padding: 80px 100px;
      background-color: #fff;
      border-radius: 30px;
      margin-bottom: 10px;

      .date {
        display: flex;
        align-items: center;
        margin-bottom: 30px;

        input[type="date"] {
          width: 225px;
          margin-right: 40px;
        }

        input[type="time"] {
          width: 160px;
          margin-right: 40px;
        }
      }

      .select {
        display: flex;
        margin-bottom: 30px;

        label {
          margin-bottom: 5px;
        }

        div {
          display: flex;
          flex-direction: column;

          &:not(:last-child) {
            margin-right: 40px;
          }

          select {
            width: 350px;
          }
        }
      }
      .link {
        label {
          margin-bottom: 5px;
        }

        div {
          display: flex;
          flex-direction: column;

          input {
            width: 600px;
          }
        }
      }
    }
    .row {
      display: flex;
      align-items: center;

      div {
        input {
          width: 25px;
          height: 25px;
          background: ${Colors.color_brown};
        }
      }
    }
  }

  .desc {
    padding: 80px 100px;
    background-color: #fff;
    border-radius: 30px;
    margin-bottom: 80px;

    .contex {
      display: flex;
      margin-bottom: 150px;

      .wrapper {
        margin-right: 40px;

        .file {
          position: relative;
          width: 170px;
          height: 120px;

          img {
            position: absolute;
            top: 70%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 77px;
            height: 57px;
          }

          span {
            position: absolute;
            top: 25px;
            border: none;
            width: 170px;
            height: 120px;
            background-color: rgba(115, 78, 63, 0.08);
            border-radius: 5px;
          }

          input {
            position: absolute;
            top: 25px;
            border: none;
            width: 170px;
            height: 120px;
            opacity: 0;
          }
        }

        label {
          margin-bottom: 5px;
        }

        textarea {
          width: 350px;
          margin-bottom: 16px;
        }
      }

      div {
        display: flex;
        flex-direction: column;
      }

      .long_desc {
        label {
          margin-bottom: 5px;
        }
        textarea {
          width: 600px;
        }
      }
    }
  }

  .outline {
    background-color: #fff;
    color: ${Colors.color_brown};
    border: 1px solid ${Colors.color_brown};
    margin-right: 40px;
  }
`;

export { Wrapper };
