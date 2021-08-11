import logo from './img/al-logo-cube.png';
import logoFont from './img/al-logo-font.png';
import './App.css';
import { Component } from 'react';
import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { Link } from 'react-router-dom'



class App extends Component {


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className='logoBox'>
            <img src={logo} className="App-logo" alt="logo" />
            <img src={logoFont} className="App-logo2" alt="logo" />
          </div>
  
          <div className='homeTitle'>
            <h3>Welcome to AniLog</h3>
            <h4>How would you like to proceed?</h4>
            <div>
              <ButtonGroup size="large" variant="contained" color="white" aria-label="contained primary button group">
                <Button className="buttonLogin">Login</Button>
                <Button ><Link to="/home" className="buttonLogin">As a Guest</Link></Button>
              </ButtonGroup>
            </div>
          </div>
        </header>
      </div>
    );
  }
}




export default App;
