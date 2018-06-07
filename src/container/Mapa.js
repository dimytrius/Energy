import React, { Component } from 'react';
import { GoogleApiWrapper } from 'google-maps-react';
import MapContainer from './MapContainer';
import firebase from 'firebase';
import { toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


      
class App extends Component {


    state = {
        status:[],
    };


    notify = (key,childData) => toast("Estado do device "+key+" é "+childData, {
      position: toast.POSITION.BOTTOM_RIGHT,
      className: 'foo'
    });
  
  componentWillMount() {
    
    var database = firebase.database().ref('usuarios/c3VpcnR5bWlkQGdtYWlsLmNvbQ==/Dev/').orderByKey();
    database.on('child_changed', (snapshot) => {

     
     
      console.log(snapshot.key + " was " + snapshot.val().Estado + " meters tall");
     this.notify(snapshot.key,snapshot.val().Estado);  
    })
  
  }


  render() {
    return (
      <div>
        <h1> Visualizar local dos Devices </h1>
        <MapContainer google={this.props.google} />
      <div>
          <ToastContainer />
         
      </div>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyChZPizXo_3sk70Cm4yveOd0YfQtuxc7As',
})(App)