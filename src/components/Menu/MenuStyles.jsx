import styled from "styled-components";

export const MenuHeading = styled.div`
  text-align: center;
  margin: 40px auto;

  @media (max-width: 480px) {
    margin-top: 200px;
    border-top: 1px solid seashell;
    padding: 20px;
  }

  @media (max-width: 769px) {
    margin-top: 250px;
    border-top: 1px solid seashell;
    padding: 20px;
  }
`;

export const MenuRow = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 10px;
`;
