import styled from "styled-components";
import img from "./../../assets/images/img-locations-background.webp";

export const LocationHeading = styled.h3`
  text-align: center;
  margin-top: 40px;
`;

export const LocationsDiv = styled.div`
  height: 700px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
  background-image: url(${img});
  background-repeat: no-repeat;
  background-position: center;

  @media (max-width: 769px) {
    display: block;
    padding: 10px;
  }
`;

export const SingleLocation = styled.div`
  width: 300px;
  height: auto;
  padding: 30px;
  margin: 20px 30px 200px 30px;
  font-size: 20px;
  text-align: center;
  background-color: black;

  @media (max-width: 769px) {
    width: 55%;
    height: 30%;
    margin: 20px;
    padding: 5px;
    text-align: center;
  }
`;
