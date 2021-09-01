import React from 'react'
//Global Style
import GlobalStyle from './components/GlobalStyle';
//Roteamento
import { Route, Switch, useLocation } from 'react-router-dom'
//Components
import AboutUs from './pages/AboutUs'
import Book from './pages/Book'
import ContactMe from './pages/ContactUs'
import Nav from './components/Nav'
//Icons
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import Admin from './pages/Admin'
import { SignupForm, LoginForm } from './components/auth/Authentication'


function App() {
  const location = useLocation()
  library.add(fab, fas)

  return (
    <div>
      <GlobalStyle/>
      {location.pathname !== '/admin' && <Nav/>}
      <Switch>
        <Route path = {['/book:id', '/book']} component={Book}/>
        <Route path = "/contact" component={ContactMe}/>
        <Route path = '/admin' component={Admin}/>
        <Route path = '/signup' component={SignupForm}/>
        <Route path = '/login' component={LoginForm}/>
        <Route exact path = "/" component={AboutUs}/>
      </Switch>
    </div>
  );
}

export default App;
