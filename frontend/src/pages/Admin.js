import React from 'react'
import {Jumbotron, Tab, Tabs, Container} from 'react-bootstrap'
import BookList from '../components/admin/BookList'
import WelcomeTab from '../components/admin/WelcomeTab'
import { Redirect } from 'react-router-dom'
import Userfront from '@userfront/react'
import jwt_decode from 'jwt-decode'

Userfront.init("jb7dwvn6")



const Admin = ({location}) => {
    const projectId = 'jb7dwvn6'
    
    if(!Userfront.accessToken()) {
        return(
            <Redirect to={{
                pathname: '/login',
                state: { from: location }
            }} />
        )
    }

    const accessData = jwt_decode(Userfront.accessToken())
    const userData = jwt_decode(Userfront.idToken())

    const roles = accessData.authorization[projectId].roles
    const isAdmin = roles.includes('admin')

    if (!isAdmin) {
        return(
            <Redirect to={{
                pathname: '/book'
            }} />
        )

    }



    const access = JSON.stringify(accessData)
    const user = JSON.stringify(userData)
    

    return(
    <Container fluid>
        <Jumbotron>
            <h1>Painel administrativo</h1>
        </Jumbotron>
        <Tabs transition={false} defaultActiveKey="home" id="uncontrolled-tab-example" className="mb-3">
            <Tab eventKey="home" title="Home">
                <WelcomeTab/>
            </Tab>
            <Tab eventKey="book" title="Livros">
                <BookList/>
            </Tab>
            <Tab eventKey="user" title="Usuários">
                <p>User</p>
                <p>{access}</p>
                <p>{user}</p>
            </Tab>
        </Tabs>
    </Container>
    )
}

export default Admin