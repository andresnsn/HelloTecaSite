import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { LogoutButton } from './auth/Authentication'
import Userfront from '@userfront/react'

Userfront.init("jb7dwvn6")

const Nav = () => {
    const menuOptions = {
        about: 'Sobre',
        portfolio: 'Meus livros',
        contact: 'Contate-nos'
    }
    return(
        <StyledNav>
            <h1><Link to = '/'>HelloTeca</Link></h1>
            <ul>
                <li><Link to='/'>{menuOptions.about}</Link></li>
                <li><Link to = '/portfolio'>{menuOptions.portfolio}</Link></li>
                <li><Link to = '/contact'>{menuOptions.contact}</Link></li>
                {   
                    !Userfront.accessToken() && (
                    <>
                    <li><Link to = '/login'>Entrar</Link></li>
                    <li><Link to = '/signup'>Cadastrar</Link></li>
                    </>
                    )
                }
                
                {Userfront.accessToken() && <li><LogoutButton/></li>}
                

            </ul>
        </StyledNav>
    )
}

const StyledNav = styled.nav`
    min-height: 10vh;
    display: flex;
    margin: auto;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 10rem;
    background: black;
    position: sticky;
    top: 0;
    z-index: 10;
    ul {
        display: flex;
        list-style: none;
    }
    li {
        padding-left: 5rem;
    }
    a {
        color: white;
        text-decoration: none;
    }
`


export default Nav