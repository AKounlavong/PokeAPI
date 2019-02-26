import React, { Component } from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom'
import MainPokePage from './pokemonPage/mainPokePage';
import MainItemPage from './itemPage/mainItemPage';
import MainLocationPage from './locationPage/mainLocationPage';
import Navbar from './navbar';

class App extends Component {
  state = {}
  
  render() {
    return (
      <div >
        <Navbar/>
        <div>
          <Switch>  
            <Route exact path="/" render={(renderProps) => <MainPokePage {...renderProps}/>} />
            <Route path="/pokemon" render={(renderProps) => <MainPokePage {...renderProps}/>} />
            <Route path="/item" render={(renderProps) => <MainItemPage {...renderProps}/>} />
            <Route path="/location" render={(renderProps) => <MainLocationPage {...renderProps}/>} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
