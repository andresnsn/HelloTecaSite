import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const HomeCard = ({image, redirect, name, heart, views}) => {
    return(

        <div>
            <Link to={redirect}>
                <StyledCard>
                    <Image src={image}/>
                    <Button>Ler agora</Button>
                </StyledCard>

            </Link>
            <ImageTitle>{name}</ImageTitle>
            <Rates>
                
                <Heart>
                    <div>{heart}</div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="34.185" height="20.378" viewBox="0 0 34.185 20.378">
                        <g id="olho" transform="translate(0 -98.725)">
                            <path id="Caminho_7" data-name="Caminho 7" d="M17.093,98.725c-6.531,0-12.454,3.573-16.825,9.378a1.353,1.353,0,0,0,0,1.615c4.371,5.811,10.294,9.385,16.825,9.385s12.454-3.573,16.825-9.378a1.353,1.353,0,0,0,0-1.615C29.547,102.3,23.624,98.725,17.093,98.725Zm.469,17.364a7.19,7.19,0,1,1,6.706-6.706A7.194,7.194,0,0,1,17.561,116.089Zm-.217-3.315a3.872,3.872,0,1,1,3.615-3.615A3.865,3.865,0,0,1,17.344,112.774Z" transform="translate(0 0)" fill="#fff"/>
                        </g>
                    </svg>
                </Heart>
                
                <Views>
                    <div>{views}</div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="34.185" height="20.378" viewBox="0 0 34.185 20.378">
                        <g id="olho" transform="translate(0 -98.725)">
                            <path id="Caminho_7" data-name="Caminho 7" d="M17.093,98.725c-6.531,0-12.454,3.573-16.825,9.378a1.353,1.353,0,0,0,0,1.615c4.371,5.811,10.294,9.385,16.825,9.385s12.454-3.573,16.825-9.378a1.353,1.353,0,0,0,0-1.615C29.547,102.3,23.624,98.725,17.093,98.725Zm.469,17.364a7.19,7.19,0,1,1,6.706-6.706A7.194,7.194,0,0,1,17.561,116.089Zm-.217-3.315a3.872,3.872,0,1,1,3.615-3.615A3.865,3.865,0,0,1,17.344,112.774Z" transform="translate(0 0)" fill="#fff"/>
                        </g>
                    </svg>
                </Views>
            </Rates>
        </div>

        
    )
}



export const Heart = styled.div`
    margin-top: 1rem;
    margin-left: 1rem;
`

export const Views = styled.div`
    margin-top: 1rem;
    margin-right: 1rem;
`

export const Rates = styled.div`
    justify-content: space-between;
    display: flex;
`

export const ImageTitle = styled.div`
    margin-left: 1rem;
    margin-top: 1.5rem;
    font-weight: bold;
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