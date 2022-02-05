import styled from "styled-components";
import { Colors } from "./Variables";

const CenterBetween = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Button = styled.button`
  padding: 18px 32px;
  background-color: ${Colors.color_brown};
  color: #fff;
  font-size: 22px;
  border-radius: 6px;
  border: none;
  font-family: "Din Pro", sans-serif;
`;

export { CenterBetween, Button };
