import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`



  html, body, #app {
    height: 100%;
    width: 100%;
    margin:0;
    background-color:#FEFEFF;
    font:300 14px 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  * {
    box-sizing: border-box;
  }

  input, button, textarea {
    cursor: pointer;
  }

  a{
    text-decoration:none;
  }
`
export const AppStyle = styled.div` height:100%; width:100%; display: flex;`

