import styled from "styled-components";

export const HeroImage = styled.img`
  width: 100%;
  height: auto;
  margin: 0 auto;
`;

export const HeroText = styled.div`
  width: 100%;
  font-size: 25px;
  background-color: black;
  text-align: center;
  position: absolute;
  top: 50%;
  right: 0;

  @media (max-width: 480px) {
    top: 40%;
  }
`;
