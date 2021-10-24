import React from 'react'
import styled from 'styled-components'
import { faBook, faJournalWhills, faBookDead, faQuran } from '@fortawesome/free-solid-svg-icons' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { About, Description, Image } from '../styles'
import { scrollReveal } from '../animation'
import { useScroll } from '../hooks/useScroll'

const ServicesSection = () => {
    const [element, controls] = useScroll()
    return(
        <Services
            variants={scrollReveal}
            animate={controls}
            initial='hidden'
            ref={element}
        >
            <Image>
                <img src="https://static.vecteezy.com/system/resources/thumbnails/001/200/107/small/book.png" width="50"></img>
            </Image>
            <ServiceDescription>
                <h2>Aqui você encontra...</h2>
                <Cards>
                    <Card>
                        <div className="icon">
                            <FontAwesomeIcon icon = {faBook} size = '4x'/>
                            <h3>Livros</h3>
                        </div>
                        <p>Dos mais diversos gêneros e tipos.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <FontAwesomeIcon icon = {faJournalWhills} size = '4x'/>
                            <h3>Almanaques</h3>
                        </div>
                        <p>Voltados a todos os públicos e todas as idades.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <FontAwesomeIcon icon = {faBookDead} size = '4x'/>
                            <h3>Artigos</h3>
                        </div>
                        <p>Científicos, econômicos e sociais.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <FontAwesomeIcon icon = {faQuran} size = '4x'/>
                            <h3>Quadrinhos</h3>
                        </div>
                        <p>Os mais diversos mangás e HQ's, inclusive da própria comunidade!</p>
                    </Card>
                </Cards>
            </ServiceDescription>
        </Services>
    )
}

const Services = styled(About)`
    h2{
        padding-top: 5rem;
    }
    p{
        width: 70%;
        padding: 2rem 0rem 4rem 0rem;
    }
`

const ServiceDescription = styled(Description)`
    flex: 2;
    h2{
        color: #FF4984;
    }
`

const Cards = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 1rem;
`

const Card = styled.div`
    padding: 0.5rem;
    flex-basis: 20rem;
    .icon{
        display: flex;
        align-items: center;
    }
    h3{
        margin-left: 1rem;
        background-color: white;
        color: black;
        padding: 1rem;
        border-radius: 7px;
    }
`

const IconDiv = styled.div`
    display: flex;
`

export default ServicesSection