import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import userAuthGuard from './components/HOCs/UserAuthGuard'

import './App.css';
import TopNav from './components/common/TopNav';
import Home from './components/Home';
import Footer from './components/common/Footer';
import PageNotFound from './components/common/PageNotFound'
import UserRegister from './components/users/UserRegister';
import UserEmailConfirmation from './components/UserEmailConfirmation'
import UserLogin from './components/users/UserLogin';
import VendorRegister from './components/vendors/VendorRegister';
// import Indoor from './components/Indoor';
// import Gym from './components/Gym';
// import Venue from './components/Venue';
// import Resturant from './components/Resturant';
import Dashboard from './components/users/Dashboard';
import Catagory from './components/Catagory';
import Service from './components/Service';
import ContactUs from './components/ContactUs';
import AfterRegister from './components/vendors/AfterRegister';




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
          <PublicRoute path="/contact-us" component={ContactUs} />

          <PublicRoute exact path="/component/:catagory/:service" component={Service} />
          <PublicRoute exact path="/component/:catagory" component={Catagory} />

          

          <PublicRoute path="/user/dashboard" component={userAuthGuard(Dashboard)}/>
          {/* <PublicRoute path="/indoor/" component={Indoor} />
          <PublicRoute path="/fitness/" component={Gym} />
          <PublicRoute path="/venue/" component={Venue} />
          <PublicRoute path="/resturant/" component={Resturant} />  */}         
 
          
          <InvalidRoute path="/after-register" component={AfterRegister}/>
          <InvalidRoute path="/verifyemail" component={UserEmailConfirmation}/>

          <InvalidRoute path="*" component={PageNotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
