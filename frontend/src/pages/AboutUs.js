import React from 'react'
import AboutSection from '../components/AboutSection'
import ServicesSection from '../components/ServicesSection'
import { motion } from 'framer-motion'
import { pageAnimation } from '../animation'
import ScrollTop from '../components/ScrollTop'
import Footer from '../components/Footer'


const AboutUs = () => {
    return(
        <motion.div
            exit='exit'
            initial='hidden'
            animate='show'
            variants={pageAnimation}
        >
            <AboutSection/>
            <ServicesSection/>
            <ScrollTop/>
            <Footer/>   
        </motion.div>
    )
}

export default AboutUs