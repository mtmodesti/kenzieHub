import styled from "styled-components";

export const InputContainer = styled.div`
  width: 90%;
  height: 45px;
  border-radius: 3.21px;
  background-color: var(--gray-2);
  display: flex;
  outline: 0;
  align-items: center;

  input {
    background-color: var(--gray-2);
    border: transparent;
    color: ${(props) => `var(${props.color})`};

    ::placeholder {
      color: var(--gray-1);
    }
  }
`;
