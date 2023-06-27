import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        background: #FFF8ED;
        width:100%; 
    height: 100% ;
    Position: relative;
    }
`;

export const Container = styled.div`
    width:100%; 
    height: 100% ;
    /* min-height: 100vh; */
    /* display: flex; */
    /* background: red; */
    /* flex-direction: column; */
    Position: relative;
    background: #FFF8ED;
`;

export const TextBox = styled.div`
    display: flex;
    width: 1164px;
    height: 225px;
    flex-direction: column;
    flex-shrink: 0;
    margin-left: 138px;
    margin-top: 73px;
    margin-bottom: 13px;
    align-items: center;
    align-content: center;
`
export const Title = styled.div`
    color: #1A1A32;
    font-size: 60px;
    font-family: Lexend Deca;
    font-weight: 900;
    
   
`;
export const Content = styled.div`
    color: #1A1A32;
    opacity: 0.65;
    font-size: 50px;
    font-family: Lexend Deca;
    font-weight: 500;
   
`;

export const OrangeBox = styled.div`
    background-color: #FEB291;
    display: flex ;
    flex-direction: column;
    width: 80%;
    height: 400px;
    flex-shrink: 0;
    border-radius: 15px;
    margin: 88px;
    margin-top: 73px;
    margin-bottom: 120px;
    padding: 35px 70px;
    padding-bottom: 70px;
`

export const OrangeTitle = styled.div`
background-color: transparent;
color: var(--pa-letra, #1A1A32);
text-align: center;
font-size: 40px;
font-family: Lexend Deca;
font-weight: 900;
`;
export const OrangeContent = styled.div`
background-color: transparent;
    color: var(--pa-letra, #1A1A32);
text-align: center;


font-size: 20px;
font-family: Comfortaa;
   
`;