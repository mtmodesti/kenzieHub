import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  .navBar {
    width: 100vw;
    height: 72px;
    display: flex;
    justify-content: center;
    position: fixed;
    background-color: var(--gray-4);
  }

  .navContent {
    width: 100%;
    max-width: 779.73px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 13px;
  }
  .hrNav {
    position: fixed;
    top: 72px;
    width: 100vw;
    border: 1px solid var(--gray-3);
  }
  .logoHome{
    
    color: var(--primaryPink);
    margin-bottom: 15px;
    font-weight: 500;
    padding-left: 65px;
    font-size: 20px;
    font-weight: 700
    }
  }
  .header {
    position: absolute;
    height: 120px;
    top: 73px;
    display: flex;
    flex-direction: column;
    padding: 13px;
    text-align: left;
    width: 100%;
    max-width: 770px;

    @media (min-width: 600px) {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
    .courseDiv {
      display: flex;
      flex-direction: column;
    }

    h1 {
      font-size: 18px;
      color: var(--gray-0);
      margin-top: 7px;
    }
    h2 {
      font-weight: 600;
      font-size: 12px;
      color: var(--primaryPink);
      margin-top: 10px;
    }
    span {
      margin-top: 20px;
      color: var(--gray-1);
      font-style: italic;
    }
    
  }
  .hrHeader {
    position: absolute;
    top: 192px;
    width: 100vw;
    border: 1px solid var(--gray-3);
  }
  .cardHeader {
    position: absolute;
    top: 200px;
    width: 100%;
    max-width: 780px;
    text-align: start;
    padding: 27px 13px 28px 13px;
    display: flex;
    justify-content: space-between;
    
  }
  .CardsTitle {
    font-weight: 600;
    font-size: 16px;
    color: var(--gray-0);
  }
`

export const ContainerCards = styled.div`
  position: absolute;
  top: 267px;
  width: 80vw;
  max-width: 370px;
  display: flex;
  background-color: var(--gray-3);
  flex-direction: column;
  padding: 22px 15px;
  border-radius: 4px;
  max-width: 780px;
  align-items: center;
  justify-content: center;
  gap: 5px;

  .modal {
    position: fixed;
    margin: 0 auto;
    top: 193px;
    width: 80%;
    max-width: 369px;
    display: flex;
    flex-direction: column;
    background: var(--gray-3);
    height: 342px;

    .cabecalhoModal {
      display: flex;
      width: 91%;
      margin-left: 4px;
      justify-content: space-between;
      align-items: center;
      background: var(--gray-2);
      height: 50px;
      padding: 13px;
      border-radius: 4px 4px 0 0;
      h2 {
        font-size: 14px;
        color: var(--gray-0);
      }
      p {
        font-size: 16px;
        color: var(--gray-1);
        font-weight: 600;
        cursor: pointer;
      }
    }
    .inputArea {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: left;
      width: 100%;

      .buttonModalEdit {
        width: 90%;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
    }
    label {
      margin-top: 20px;
      width: 90%;
      text-align: start;
      font-size: 9.77px;
      font-weight: 400;
      padding-bottom: 17px;
    }
    select {
      width: 90%;
      height: 48px;
      border-radius: 3.21px;
      padding: 0px 13px;
      background-color: var(--gray-2);
      display: flex;
      flex-wrap: nowrap;
      align-items: center;
      color: var(--gray-0);
      margin-bottom: 20px;
    }
  }
`
