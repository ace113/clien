import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import './App.css';
import TopNav from './components/common/TopNav';
import Home from './components/Home';
import Footer from './components/common/Footer';
import PageNotFound from './components/common/PageNotFound'
import UserRegister from './components/users/UserRegister';
import UserEmailConfirmation from './components/UserEmailConfirmation'
import UserLogin from './components/users/UserLogin';
import VendorRegister from './components/vendors/VendorRegister';


// HOc to routes
export const PublicRoute = ({ component: Component, ...rest }) => {
  return (
    <Route {...rest} component={(props) => (
      <div>
        <TopNav /> {/* header is visible*/}        
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
      <BrowserRouter>
        <Switch>
          <PublicRoute exact path='/' component={Home} />
          <PublicRoute path="/user/register" component={UserRegister}/>
          <PublicRoute path="/user/login" component={UserLogin}/>
          <PublicRoute path="/vendor/register" component={VendorRegister}/>
          
          <InvalidRoute path="/verifyemail" component={UserEmailConfirmation}/>

          <InvalidRoute path="*" component={PageNotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
