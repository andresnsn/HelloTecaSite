import React from 'react'

import { useHistory } from 'react-router-dom'
import { About, Description, BookList } from '../styles'
import { motion } from 'framer-motion'
import { titleAnimation, fade, photoAnimation, scrollReveal } from '../animation'
import { useScroll } from '../hooks/useScroll'
import styled from 'styled-components'
import { pageAnimation } from '../animation'
import HomeCard from '../components/HomeCard'

const AboutSection = () => {
    const[element, controls] = useScroll()
    const history = useHistory()

    /*const redirectHandler = () => {
        history.push('/contact')
    }*/

    return(
        <About
            variants={scrollReveal}
            animate={controls}
            initial='hidden'
            ref={element}
        >
            <CardList>
                <HomeCard image="https://i.pinimg.com/originals/52/bf/5d/52bf5d93c7a84395e13ba8fd3f368802.jpg" redirect='/books/hamlet' name='Hamlet' heart='23' views='56'></HomeCard>
                <HomeCard image="https://pm1.narvii.com/6710/a3ac0d786a05a80aedee88d2cd42121a65f52677_hq.jpg" redirect='/books/fate-unlimited-blade-works' name='Fate - Unlimited Blade Works' heart='18' views='22'></HomeCard>
                <HomeCard image="https://cdn.maioresemelhores.com/imagens/03-pessoas-normais-cke.jpg" redirect='/books/pessoas-normais' name='Pessoas normais' heart='11' views='12'></HomeCard>
            </CardList>
            <Description>
                <StyledTitle>
                    <motion.h2 variants={titleAnimation}>Leia</motion.h2>
                </StyledTitle>
                <StyledGeneralTitle>
                    <StyledSubtitle1>
                        <motion.h1 variants={titleAnimation}>em&nbsp;</motion.h1>
                    </StyledSubtitle1>    
                    <StyledSubtitle2>
                        <motion.h1 variants={titleAnimation}>qualquer&nbsp;</motion.h1>
                    </StyledSubtitle2>
                    <StyledSubtitle3>
                        <motion.h1 variants={titleAnimation}>lugar</motion.h1>
                    </StyledSubtitle3>
                </StyledGeneralTitle>
                <StyledDescription>
                    <motion.p vaIriants={fade}>Leia livros, artigos, mangás e quadrinhos de pessoas do mundo todo!
                        Tem uma ideia bacana? Aqui você pode criar, editar e publicar suas próprias histórias para
                        que todos possam ver!
                    </motion.p>
                </StyledDescription>
            </Description>
        </About>
        /*<button onClick={redirectHandler}>Comece já!</button>*/ 
    )
}

export const StyledGeneralTitle = styled.div`
    display: flex;
`

export const StyledTitle = styled.div`
    font-family: 'Roboto', sans-serif;
    h2{
        color: white;
        font-size: 120px;
    }
`

export const StyledSubtitle1 = styled.div`
    display: flex;
    font-family: 'Roboto', sans-serif;
    h1{
        color: #FF4984;
        font-size: 56px;
    }
`
export const StyledSubtitle2 = styled.div`
    display: flex;
    font-family: 'Roboto', sans-serif;
    h1{
        color: white;
        font-size: 56px;

    }
`
export const StyledSubtitle3 = styled.div`
    display: flex;
    font-family: 'Roboto', sans-serif;
    h1{
        color: #FF4984;
        font-size: 56px;
    }
`

export const StyledDescription = styled.div`
    font-family: 'Roboto', sans-serif;

    p{
        color: white;
    }
`

export const CardList = styled.div`
    margin-right: 70px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));
    flex: 1;
    //repeat(auto-fit, minmax(300px, 1fr));
    grid-column-gap: 2rem;
    grid-row-gap: 5rem;
`



export default AboutSection