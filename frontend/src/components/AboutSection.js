import React from 'react'

import { useHistory } from 'react-router-dom'
import { About, Description, Image } from '../styles'
import { motion } from 'framer-motion'
import { titleAnimation, fade, photoAnimation, scrollReveal } from '../animation'
import { useScroll } from '../hooks/useScroll'

const AboutSection = () => {
    const[element, controls] = useScroll()
    const history = useHistory()

    const redirectHandler = () => {
        history.push('/contact')
    }

    return(
        <About
            variants={scrollReveal}
            animate={controls}
            initial='hidden'
            ref={element}
        >
            <Description>
                <motion.h2 variants={titleAnimation}>HelloTeca</motion.h2>
                <motion.h1 variants={titleAnimation}>Sua plataforma de streaming de livros</motion.h1>
                <motion.p variants={fade}>Leia livros, artigos, mangás e quadrinhos de pessoas do mundo todo!
                    Tem uma ideia bacana? Aqui você pode criar, editar e publicar suas próprias histórias para
                    que todos possam ver!
                </motion.p>
                    <button onClick={redirectHandler}>Comece já!</button>
            </Description>
            <Image>
                <motion.div variants={photoAnimation}>
                    <img src="https://image.winudf.com/v2/image/Y29tLmhhbm5hLmJvb2tzX3NjcmVlbl8wXzNsbTU2dzlt/screen-0.jpg?h=355&fakeurl=1&type=.jpg"></img>
                </motion.div>
            </Image>
            
        </About>
    )
}

export default AboutSection