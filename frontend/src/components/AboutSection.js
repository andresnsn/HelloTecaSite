import React from 'react'

import { useHistory } from 'react-router-dom'
import { About, Description, Image } from '../styles'
import { motion } from 'framer-motion'
import { titleAnimation, fade, photoAnimation, scrollReveal } from '../animation'
import { useScroll } from '../hooks/useScroll'
import styled from 'styled-components'

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
            <Image>
                <motion.div variants={photoAnimation}>
                    <img src="https://image.winudf.com/v2/image/Y29tLmhhbm5hLmJvb2tzX3NjcmVlbl8wXzNsbTU2dzlt/screen-0.jpg?h=355&fakeurl=1&type=.jpg"></img>
                </motion.div>
            </Image>
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
                <motion.p vaIriants={fade}>Leia livros, artigos, mangás e quadrinhos de pessoas do mundo todo!
                    Tem uma ideia bacana? Aqui você pode criar, editar e publicar suas próprias histórias para
                    que todos possam ver!
                </motion.p>
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
`

export default AboutSection