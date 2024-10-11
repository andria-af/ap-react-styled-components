import styled from "styled-components";

interface ContainerSectionProps{
    flexDirection: 'row' | 'row-reverse';
}

export const ContainerSection = styled.section<ContainerSectionProps>`
    display: flex;
    width: 100%vw;
    height: max-content;
    flex-direction: ${(props)=> props.flexDirection};


    div{
        width: 50%;
        height: 100vh;
        background-image: url(https://picsum.photos/800/800);
        background-size: cover;
        background-repeat: no-repeat;
    }

    section{
        width: 50%;
    }

    h4{
        text-align: justify;
        padding-top: 10%;
        padding-left: 10%;
        padding-right: 10%;
    }

    p {
        text-align: initial;
        padding-top: 2%;
        padding-bottom: 10%;
        padding-left: 10%;
        padding-right: 10%;
    }
`;