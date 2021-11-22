import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Logo from './Logo.js'

const Footer = () => {
    return(
        <StyledFooter>
            <Logo></Logo>
            <ul>
            <Link to='/contact'><li>Contato</li></Link>
            <Link to ='/'><li>Sobre</li></Link>
            </ul>
        </StyledFooter>
    )
}

const StyledFooter = styled.footer`
    min-height: 15vh;
    display: flex;
    margin: auto;
    background-color: black;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 10rem;
    background: black;
    position: sticky;
    top: 0;
    z-index: 10;
    h2 {
        color: #212529;
    }
    ul {
        display: flex;
        list-style: none;
    }
    li {
        padding-left: 5rem;
        font-size: 1.2rem;
        color: #212529;
        font-weight: bold;
    }
    a {
        color: white;
        text-decoration: none;
    }
`

export default Footer
