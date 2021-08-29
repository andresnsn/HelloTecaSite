import React from 'react'
import styled from 'styled-components'
import Card from '../components/Card'
import { useApi } from '../hooks/useApi'
import PortfolioDetail from '../components/PortfolioDetail'
import {useLocation} from 'react-router-dom'
import { motion } from 'framer-motion'
import { pageAnimation } from '../animation'
import ScrollTop from '../components/ScrollTop'

const Portfolio = () => {
    const location = useLocation()
    const slug = location.pathname.split('/')[2]
    const { data } = useApi('/portfolio')

    return(
        <PortfolioList
            exit='exit'
            initial='hidden'
            animate='show'
            variants={pageAnimation}
        >
            {slug && <PortfolioDetail slug={slug}/>}
            <CardList>
                {data?.data?.map(project => {
                    return <Card key={project.slug} project = {project}/>
                })}
            </CardList>
            <ScrollTop/>
        </PortfolioList>
    )
}



const PortfolioList = styled(motion.div)`
    min-height: 90vh;
    overflow: hidden;
    padding: 5rem 10rem;
`

const CardList = styled.div`

    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-column-gap: 3rem;
    grid-row-gap: 5rem;
`

export default Portfolio