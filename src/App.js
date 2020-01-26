import React from 'react';
// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { Switch, BrowserRouter, Route } from 'react-router-dom'
import { Container } from 'reactstrap'
import { Provider } from 'react-redux'

import store from './store'

import Footer from './components/User/Footer'
import Header from './components/User/Header'
import Home from './components/Home';
import IndoorGames from './components/User/IndoorGames'
import PageNotFound from './components/PageNotFound'
import Login from './components/User/Login'
import Gym from './components/User/Gym'
import Venue from './components/User/Venue'
import Resturant from './components/User/Resturant'
import Register from './components/User/Register';
import VerifyEmail from './components/VerifyEmail';
import ContactUs from './components/ContactUs';
import VendorRegister from './components/Vendor/VendorRegister';


// const Main = withRouter(({ location }) => {
//   return(
//     <div>
//         { location.pathname == '/404' ? null : <div><Header/></div> }
//     </div>
//   )
// })

export const PublicRoute = ({ component: Component, ...rest }) => {
  return (
    <Route {...rest} component={(props) => (
      <div>
        <Header /> {/* HEADER ALWAYS VISIBLE */}
        <Component {...props} />
        <Footer />
      </div>
    )}
    />
  )
}
export const InvalidRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      component={(props) => (<Component {...props} />)}
    />
  );
};


function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          {/* <Main/> */}
          <Container fluid>
            <Switch>
              <PublicRoute exact path="/" component={Home} />
              <PublicRoute exact path="/venue" component={Venue} />
              <PublicRoute exact path="/resturant" component={Resturant} />
              <PublicRoute exact path="/gym" component={Gym} />
              <PublicRoute exact path="/indoor" component={IndoorGames} />
              <PublicRoute exact path="/signin" component={Login} />
              <PublicRoute exact path="/signup" component={Register} />
              <PublicRoute exact path="/contact" component={ContactUs} />
              <PublicRoute expct path="/vendor/register" component={VendorRegister}/>

              
              <InvalidRoute path="/verifyemail" component={VerifyEmail} />

              {/* return to the 404 */}
              <InvalidRoute path="*" component={PageNotFound} />
            </Switch>
          </Container>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
