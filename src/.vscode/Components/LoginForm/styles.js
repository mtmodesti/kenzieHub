import styled from 'styled-components'

export const Component = styled.div`
form{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 33.6911px 17.6477px;
    width: 296px;
    height: 402.69px;
    background-color: var(--gray3);
    box-shadow: 0px 3.20867px 32.0867px -8.02168px rgba(0, 0, 0, 0.25);
    border-radius: 3.20867px;
}
h1{
    font-size: 16px;
    color: var(--color-primary);
    font-weight: bold;
    margin-bottom: 14px;
    text-align: center; 
}
h2{
    margin-bottom: 30px;
    color: var(--gray0);
    font-weight: bold;
    font-size: 16px;
}

input{
    background: var(--gray2);
    width: 320px;
    height: 48px;
    border: 1.2182px solid #f8f9f4;
    border-radius: 4px;
    color: white;
    outline: 0;
    display: flex;
    border: none;
}

span {
    font-weight: 400;
    font-size: 9.77px;
    color: var(--gray0);
    margin-bottom: 10px;
    margin-top: 10px;
    width: 324px;
}

button + span {
    text-align: center;
    color: var(--gray1);
    font-size: 9.63px;
    font-weight: 600;
}

`