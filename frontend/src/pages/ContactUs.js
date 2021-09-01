import React from 'react'
import styled from 'styled-components'
import SocialNetworkSection from '../components/SocialNetworkSection'
import ContactForm from '../components/ContactForm'
import { motion } from 'framer-motion'
import { pageAnimation } from '../animation'

const ContactUs = () => {
    return(
        <ContactStyled
            exit='exit'
            initial='hidden'
            animate='show'
            variants={pageAnimation}
        >
            <Title>
                <h2>Get in touch</h2>
            </Title>
            <Areas>
                <ContactForm/>
                <SocialNetworkSection/>
            </Areas>
        </ContactStyled>
    )
}

const ContactStyled = styled(motion.div)`
    padding: 1rem 10rem;
    color: #353535;
    min-height: 90vh;
`

const Title = styled.div`
    margin-bottom: 4rem;
    h2 {
        color: white;
    }
`
const Areas = styled.div`
    display: flex;
    align-items: center;
`


export default ContactUs