import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const HomeCard = ({image}) => {
    return(
        <div>
            <StyledCard>
                <Image src={image}/>
                <Button>Ler agora</Button>
            </StyledCard>
        </div>
    )
}

export const ImageDescription = styled.div`
    font-family: 'Roboto', sans-serif;

`

const StyledCard = styled.div`
    //z-index: 1;
    background-color: #1b1b1b;
    //min-height: 30vh;
    border-color: #416CD5;
    border-radius: 1.5rem;
    cursor: pointer;
    overflow: hidden;
    box-shadow: 0.01em 0.1em 1em 0.1em #fc3f93;
    width:100%;
    height:100%;
    display: flex;
    position: relative;
    //position: center;
    /*a{
        text-decoration: none
    }*/
`

const Image = styled.img`
    width:100%;
    height: 100%;
    margin: auto;
    display: block;

`

const Button = styled.button`
    position: absolute;
    top: 92.5%;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    background-color: #ff4984;
    color: white;
    font-size: 16px;
    padding: 12px 24px;
    border: none;
    cursor: pointer;
    border-radius: 25px;
    text-align: center;
    width: 90%;
    &:hover{
        background-color: pink;
    }
`

const Content = styled.div`
    //display: flex;
    //flex-direction: column;
    //justify-content: center;
    max-width:100%;
    max-height:100%;
    justify-content: space-around;
`



const Info = styled.div`
    background-color: pink;
    z-index: 2;
    text-align: center;
    padding-left: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    h3 {
        padding-top: 2rem;

    }
`

const Teste = styled.div`

`

export default HomeCard