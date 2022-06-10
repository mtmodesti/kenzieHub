import styled from "styled-components";

export const Container = styled.div`
  padding: 80px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    padding-bottom: 30px;
  }

  span{
    color: var(--primaryPink);
    margin-bottom: 15px;
    font-weight: 500;
    padding-left: 65px;
    font-size: 20px;
    font-weight: 700
  }
`;

export const ContainerForm = styled.form`
  margin-left: 20%;
  width: 80vw;
  max-width: 370px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--gray-3);
  padding: 40px 0;
  border-radius: 4px;
  h2 {
    font-size: 15px;
    padding-bottom: 20px;
  }
  span {
      color: red;
    }
  label {
    width: 90%;
    text-align: start;
    font-size: 9.77px;
    font-weight: 400;
    padding-bottom: 17px;
    
  }

  div {
    margin-bottom: 18px;
  }
  p {
    margin-top: 27px;
    font-size: 9.63px;
    color: var(--gray-1);
    font-weight: 600;
    margin-bottom: 17.65px;
  }
`;
