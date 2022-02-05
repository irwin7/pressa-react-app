import styled from "styled-components";
import { Width } from "./Variables";

const Container = styled.div`
  max-width: ${Width.container_width};
  width: 100%;
  padding-left: ${Width.padding};
  padding-right: ${Width.padding};
  margin-left: auto;
  margin-right: auto;
`;

const ContainerFluid = styled.div`
  width: 100%;
  padding: 0 60px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: ${Width.max_md}) {
    padding: 0 30px;
  }

  @media (max-width: ${Width.max_xs}) {
    padding: 0;
  }
`;

export { Container, ContainerFluid };
