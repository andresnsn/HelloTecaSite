import React from 'react'
import styled from 'styled-components'
import { faGithubSquare, faLinkedin, faYoutubeSquare, faTelegramPlane } from '@fortawesome/free-brands-svg-icons'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SocialNetworkSection = () => {
    return(
        <Network>
            <Social href="https://github.com/andresnsn" target="_blank">
                <FontAwesomeIcon icon={faGithubSquare} size='4x'/>
                <h3>github.com/andresnsn</h3>
            </Social>
            <Social href="https://www.linkedin.com/in/andré-ribeiro-sn" target="_blank">
                <FontAwesomeIcon icon={faLinkedin} size='4x'/>
                <h3>LinkedIn</h3>
            </Social>
            <Social href="https://www.youtube.com/channel/UCTmU6QLFjaBR7fSNpDQ2w5w" target="_blank">
                <FontAwesomeIcon icon={faYoutubeSquare} size='4x'/>
                <h3>Youtube</h3>
            </Social>
            <Social href="https://www.udemy.com" target="_blank">
                <FontAwesomeIcon icon={faGraduationCap} size='4x'/>
                <h3>Udemy</h3>
            </Social>
            <Social href="https://t.me/joinchat/UMMRfkRH8YxhOWMx" target="_blank">
                <FontAwesomeIcon icon={faTelegramPlane} size='4x'/>
                <h3>Telegram</h3>
            </Social>
        </Network>
    )
}

const Network = styled.div`
    padding: 1rem 5rem;
`

const Social = styled.a`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    border-radius: 15px 50px;
    padding-left: 2rem;
    text-decoration: none;
    color: inherit;
    &:hover{
        background: yellow;
        cursor: pointer;
    }
    h3 {
        color: grey;
        margin: 2rem;
    }   
`

export default SocialNetworkSection