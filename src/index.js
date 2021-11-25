import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import reportWebVitals from './reportWebVitals';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Head from './Components/Head';
import ServiceList from './Components/ServiceList';
import HomeMain from './Components/HomeMain';
import Testimonials from './Components/Testimonials';
import Protfolio from './Components/Protfolio';
import Teams from './Components/Teams';
import Pricing from './Components/Pricing';
import Contact from './Components/Contact';


// import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'



ReactDOM.render(
  <React.StrictMode>
  <div>
    <Head />
    <Home />
    <ServiceList />
    <Testimonials />
    <Protfolio />
    <Teams />
    <Pricing />
    <Contact />
  </div>
</React.StrictMode>,



  // <React.StrictMode>
  //   <Router>
  //     <Head />
  //     {/* <Switch>
  //       <Route exact path="/">
  //         <Home />
  //       </Route>
  //       <Route exact path="/contact">
  //         <Contact />
  //       </Route>
  //     </Switch> */}
  //   </Router>
  // </React.StrictMode>
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
