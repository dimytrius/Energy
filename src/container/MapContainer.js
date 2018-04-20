import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';

export default class MapContainer extends Component {


    

  // ======================
  // ADD LOCATIONS TO STATE
  // ======================
  state = {
    cor:'http://maps.google.com/mapfiles/ms/icons/green-dot.png',
    locations: [
      { name: "Device -- Automi", location: {lat:-13.005, lng: -38.486} },
    ]
  }

  componentDidUpdate() {
    
    this.loadMap(); // call loadMap function to load the google map


  }

  
  loadMap() {
    if (this.props && this.props.google) { // checks to make sure that props have been passed
      const {google} = this.props; // sets props equal to google
      const maps = google.maps; // sets maps to google maps props

      const mapRef = this.refs.map; // looks for HTML div ref 'map'. Returned in render below.
      const node = ReactDOM.findDOMNode(mapRef); // finds the 'map' div in the React DOM, names it node

      const mapConfig = Object.assign({}, {
        center: {lat: -13.0046451, lng: -38.4881771}, // sets center of google map to NYC.
        zoom: 18, // sets zoom. Lower numbers are zoomed further out.
        mapTypeId: 'roadmap' // optional main map layer. Terrain, satellite, hybrid or roadmap--if unspecified, defaults to roadmap.
      })

      this.map = new maps.Map(node, mapConfig); // creates a new Google map on the specified node (ref='map') with the specified configuration set above.
     
  // ==================
  // ADD MARKERS TO MAP
  // ==================
      this.state.locations.forEach( location => { // iterate through locations saved in state
        const marker = new google.maps.Marker({ // creates a new Google maps Marker object.
          position: {lat: location.location.lat, lng: location.location.lng}, // sets position of marker to specified location
          map: this.map, // sets markers to appear on the map we just created on line 35
          title: location.name, // the title of the marker is set to the name of the location
          animation: google.maps.Animation.DROP,
          icon: this.state.cor
        });
      })

    }
  }

  componentWillMount() {
    var database = firebase.database().ref('usuarios/c3VpcnR5bWlkQGdtYWlsLmNvbQ==/Dev/0/');
    database.on('value', (snapshot) => {
        var estado = snapshot.val().Estado;
        console.log(estado);
        if(estado==='Ligado'){
        this.setState({cor: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png'})
        }else{
            this.setState({cor: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png'})
  
        }
    })
    
}
  render() {
    const style = { // MUST specify dimensions of the Google map or it will not work. Also works best when style is specified inside the render function and created as an object
      width: '100%', // 90vw basically means take up 90% of the width screen. px also works.
      height: '75vh' // 75vh similarly will take up roughly 75% of the height of the screen. px also works.
    }

    return ( // in our return function you must return a div with ref='map' and style.
      <div ref="map" style={style}>
        loading map...
      </div>
    )
  }
}