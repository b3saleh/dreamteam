// App.js
// Hamburger Menu button mechanism based on : https://css-tricks.com/hamburger-menu-with-a-side-of-react-hooks-and-styled-components/
import React, { useState, useRef, Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { useOnClickOutside } from './hooks';
import { GlobalStyles } from './global';
import { theme } from './theme';
import { Burger, Menu } from './components';
import './App.css';
import logo from './DreamTeamLogo.PNG';
import {Home} from './pages/Home';
import {About} from './pages/About';
import {Signin} from './pages/Signin';
import {Signup} from './pages/Signup';
import {Findatryout} from './pages/Findatryout';
import {userDashboard} from './pages/userDashboard'
import {createATryout} from './pages/createatryout'
import {buildTeam} from './pages/buildTeam'
import {tryoutEvaluation} from './pages/tryoutEvaluation'




function App() {
  const [open, setOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));


  return (
    
  

    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <div>
          <Router>
            <Route exact path= "/" component={Home}/>
            <Route exact path= "/About" component={About}/>
            <Route exact path= "/SignIn" component={Signin}/>
            <Route exact path= "/SignUp" component={Signup}/>
            <Route exact path= "/FindATryout" component={Findatryout}/>
            <Route exact path= "/user" component={userDashboard}/>
            <Route exact path= "/CreateaTryout" component={createATryout}/>
            <Route exact path= "/BuildTeam" component={buildTeam}/>
            <Route exact path= "/TryoutEvaluation" component={tryoutEvaluation}/>


          </Router>
          
          
        </div>
        <div ref={node}>
          <Burger open={open} setOpen={setOpen} />
          <Menu open={open} setOpen={setOpen} />
        </div>
      
      </>
    </ThemeProvider>
  );
}
export default App;