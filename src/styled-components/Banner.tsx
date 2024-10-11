import styled from "styled-components";

export const Banner= styled.div`
    height: max-content;
    width: 100%;
    background-image: url(https://picsum.photos/800/800);
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;

    h1{
        color: white;
        font-size: 200%;
        padding: 10%
    }

    h2{
        padding: 5%;
        color: white;
    }
`