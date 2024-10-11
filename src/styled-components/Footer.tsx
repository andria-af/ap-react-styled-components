import styled from "styled-components";

export const Footer= styled.footer`
    margin: 5%;
    height: max-content;
    width: 100%vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    div{
        width: 50%;
    }

    section{
        width: 20%;
    }

    svg, a {
        font-weight: bold;
        margin: 2%;
        color: #0881e4;
        text-decoration: none;
    }

    p{
        color: grey;
        padding-left: 2%;
        padding-top: 1%;
    }

`;