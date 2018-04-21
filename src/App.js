import React, { Component } from 'react';
import firebase from 'firebase';
import './App.css';
import NavBar from './ui/NavBar';


class App extends Component {

  componentWillMount(){

    // Initialize Firebase
   
  
  }
  
  render() {
    const logo = 'Automi'
    return (
      <div className="container" style={{backgroundColor:'#9b9b9b',width:'100%',height:'100%'}} >
        <NavBar logo={logo} />
        {this.props.children}
      </div>
    );
  }
}

export default App;
