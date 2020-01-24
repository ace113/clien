import React from 'react';
// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { Switch, BrowserRouter, Route, withRouter, Redirect } from 'react-router-dom'
import { Container } from 'reactstrap'

import Header from './components/Vendor/Header'
import Home from './components/Home';
import Dashboard from './components/Vendor/Dashboard'
import PageNotFound from './components/PageNotFound'
import Login from './components/Vendor/Login'


const Main = withRouter(({ location }) => {
  return(
    <div>
        { location.pathname == '/404' ? null : <Header/> }
    </div>
  )
})

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Main/>
        <Container fluid>
          <Switch>          
            <Route exact path="/" component={Home} />
            <Route exact path="/dashboard" component={Dashboard} />
            
            {/* return to the 404 */}
            <Route path="/404" component={PageNotFound} />
            <Redirect to="/404"/>            
          </Switch>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
