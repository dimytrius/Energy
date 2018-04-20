import React, { Component } from 'react';
import firebase from 'firebase';
import './App.css';
import NavBar from './ui/NavBar';


class App extends Component {

  componentWillMount(){

    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyBskOWUVUPlEJs0PLCp-n_YansWi0ckYo4",
        authDomain: "projeto-novo-d9b17.firebaseapp.com",
        databaseURL: "https://projeto-novo-d9b17.firebaseio.com",
        projectId: "projeto-novo-d9b17",
        storageBucket: "projeto-novo-d9b17.appspot.com",
        messagingSenderId: "944462740024"
      };
      firebase.initializeApp(config);
  
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
