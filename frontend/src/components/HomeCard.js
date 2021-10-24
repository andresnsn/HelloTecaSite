import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const HomeCard = ({image}) => {
    return(
        
            <StyledCard>
                    <Content>
                        <Image src={image}/>
                        <Info>
                            <h3>Teste</h3> 
                        </Info>
                    </Content>
            </StyledCard>
    )
}

const StyledCard = styled.div`
    background-color: #1b1b1b;
    min-height: 30vh;
    border-color: #416CD5;
    text-align: center;
    border-radius: 1.5rem;
    cursor: pointer;
    overflow: hidden;
    box-shadow: 0.01em 0.1em 1em 0.1em #fc3f93;
    padding-bottom: 60px;
    a{
        text-decoration: none
    }
`

const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 100%;
    height: 65vh;
`

const Image = styled.img`
    width: 100%;
    height: 100%;
`

const Info = styled.div`
    text-align: left;
    padding-left: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    h3 {
        padding-top: 2rem;

    }
`

export default HomeCard