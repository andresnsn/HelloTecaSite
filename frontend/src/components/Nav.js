import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { LogoutButton } from './auth/Authentication'
import Userfront from '@userfront/react'
import Logo from './Logo.js'

Userfront.init("jb7dwvn6")

const Nav = () => {
    const menuOptions = {
        home: 'Home',
        about: 'Sobre',
        books: 'Meus livros',
        contact: 'Contate-nos'
    }
    return(
        <StyledNav>
            <h1><Link to = '/'><Logo width="130" height="150"></Logo></Link></h1>
            <ul>
                <li><Link to = '/'>{menuOptions.home}</Link></li>
                <li><Link to ='/'>{menuOptions.about}</Link></li>
                <li><Link to = '/books'>{menuOptions.books}</Link></li>
                <li><Link to = '/contact'>{menuOptions.contact}</Link></li>
                {   
                    !Userfront.accessToken() && (
                    <>
                    <StyledLoginButton><Link to = '/login'>Entrar</Link></StyledLoginButton>
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
    padding-bottom: -20px;
    background: #1A243C;
    position: sticky;
    top: 0;
    z-index: 5;
    
    ul {
        display: flex;
        list-style: none;
    }
    li {
        padding-left: 61px;
        padding-right: 61px;
        padding-top: 16px;
        padding-bottom: 16px;
    }
    a {
        color: #FF4984;
        text-decoration: none;
        font-family: 'Roboto', sans-serif;
        font-size: 20px;
    }
`

const StyledLoginButton = styled.li`
        border: 1px #FF4984;
        background-color: #FF4984;
        border-radius: 38px;
        display: table;
        //56h
        //176w
        a{
            color: white;
            font-size: 20px;
            font-family: 'Roboto', sans-serif;
        }
`


export default Nav