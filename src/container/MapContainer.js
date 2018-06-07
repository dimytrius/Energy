import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';




class MapContainer extends Component {
  // ======================
  // ADD LOCATIONS TO STATE
  // ======================
  state = {
    cor1:'',
    status1:'',
    bateria1:'',
    cor2:'',
    Status2:'',
    bateria2:'',

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
         const marker = new google.maps.Marker({ // creates a new Google maps Marker object.
          position: {lat: -13.005, lng: -38.486}, // sets position of marker to specified location
          map: this.map, // sets markers to appear on the map we just created on line 35
          title: "Device 0", // the title of the marker is set to the name of the location
          icon: this.state.cor1,
        });
        var infowindow = new google.maps.InfoWindow({
          content: 'Device 0<br>Status:'
                      +this.state.Status1+'<br>'+'Bateria:'+this.state.bateria1           
        });
        marker.addListener('click', function() {
          infowindow.open(maps, marker);
        });
        // const marker2 = new google.maps.Marker({ // creates a new Google maps Marker object.
        //   position: {lat: -13.005265, lng: -38.485613}, // sets position of marker to specified location
        //   map: this.map, // sets markers to appear on the map we just created on line 35
        //   title: "Device 1", // the title of the marker is set to the name of the location
        //   icon: this.state.cor2,
        // });
        // var infowindow2 = new google.maps.InfoWindow({
        //   content: 'Device 1<br>Status:'
        //               +this.state.Status2+'<br>'+'Bateria:'+this.state.bateria2           
        // });
        // marker2.addListener('click', function() {
        //   infowindow2.open(maps, marker2);
        // });
      

    }
  }

  componentWillMount() {
    
    
    
    var database = firebase.database().ref('usuarios/c3VpcnR5bWlkQGdtYWlsLmNvbQ==/Dev/0/');
    database.on('value', (snapshot) => {
        var estado;
        estado = snapshot.val().Estado;
        console.log(estado);
        if(estado==='Ligado'){
          {this.notify}
          this.setState({
            Status1: 'Ligado',
            cor1: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png'
            
          })
          {this.notify}
        }else if(estado==='Deslig') {
          this.setState({
            Status1: 'Desligado',
            cor1: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png'
    
          })
        }
    })
  
     var database1 = firebase.database().ref('usuarios/c3VpcnR5bWlkQGdtYWlsLmNvbQ==/Dev/1/');
     database1.on('value', (snapshot) => {
         var estado = snapshot.val().Estado;
         console.log(estado);
         if(estado==='Ligado'){
          this.setState({
            Status2: 'Ligado',
            cor2: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png'
          })
        }else if(estado==='Deslig') {
          this.setState({
            Status2: 'Ligado',
            cor2: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png'
          })
  
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
      
    
       
        
        
        
      </div>
      
    )
  }
}
export default MapContainer;