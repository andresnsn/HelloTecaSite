import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useApi } from '../hooks/useApi'
import {useHistory} from 'react-router-dom'
import Speech from 'react-speech'


const BookDetail = ({slug}) =>{
    const history = useHistory()
    const api = useApi(`/books/${slug}`)
    const book = JSON.stringify(api.data?.data?.content)

    const exitDetailHandler = (click) => {
        const element = click.target
        if(element.classList.contains('shadow')){
            document.body.style.overflow = 'auto'
            history.push('/books')
        }
    }

    return(
        <CardShadow className="shadow" onClick={exitDetailHandler}>
            <Detail>
                <Stats>
                    <div>
                        <Title>{api?.data?.data?.title}</Title>
                        <Description>
                            <p>{api?.data?.data?.description}</p>
                        </Description>
                    </div>
                    <Speech text={book} displayText="Iniciar" textAsButton="true" pause={true} resume={true} ></Speech>  
                </Stats>
                <Content>
                    <p>{api?.data?.data?.content}</p>
                </Content>
                <img src="https://images.pexels.com/photos/1342460/pexels-photo-1342460.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"></img>
            </Detail>
        </CardShadow>
    )
}
const Detail = styled.div`
    width: 80%;
    min-height: 80vh;
    background: white;
    position: absolute;
    border-radius: 1rem;
    left: 10%;
    top: 15%;
    margin-bottom: 10%;
    z-index: 10;
    img{
        width: 100%;
        object-fit: cover;
        height: 50vh;
    }
`

const Stats =  styled.div`
    display: flex;
    justify-content: space-between;
    padding: 1rem 5rem;
`

const Title = styled.h2`
    color: #696969;
`

const Content = styled.div`
    padding: 2rem 5rem;
    p{
        color: black;
    }
`

const Description = styled.div`
    text-align: center;
    min-width: 300px;
    h3{
        color: #696969;
    }
`

const CardShadow = styled.div`
    width: 100%;
    min-height: 100vh;
    overflow-y: scroll;
    background: rgba(0,0,0,0.5);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 5;
    &::-webkit-scrollbar{
        width: 0.5rem;
    }
    &::-webkit-scrollbar-thumb{
        background-color: #ff7676;
    }
    &::-webkit-scrollbar-track{
        background: white;
    }
`

const styledButton = {
    play: {
        button: {
            width: '28',
            height: '28',
            cursor: 'pointer',
            pointerEvents: 'none',
            outline: 'none',
            backgroundColor: 'yellow',
            border: 'solid 1px rgba(255,255,255,1)',
            borderRadius: 6
        }
    }
}

export default BookDetail