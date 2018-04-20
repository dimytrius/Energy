import React, { Component } from 'react';
import firebase from 'firebase';
import ReleaseForm from '../ui/ReleaseForm';

export default class Releases extends Component {

    constructor() {
        super();
        this.state = {
            teste:'',
            releases: [
                {
                    id: 1,
                    releaseName: 'Device 1',
                    releaseDate: ''
                },
            ]
        }
    }
    componentWillMount() {
        var database = firebase.database().ref('usuarios/c3VpcnR5bWlkQGdtYWlsLmNvbQ==/Dev/0/');
        database.on('value', (snapshot) => {
            var estado = snapshot.val().Estado;
            console.log(estado);
            this.setState({teste: estado})
        })

    }
    
   


    render() {
        
        return (
            <div className="container" style={{ paddingTop: '25px' }}>
                <ReleaseForm  />
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Device</th>
                            <th>Estado</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.releases.map((release, index) => {
                            
                            return (
                                <tr key={release.id}>
                                    <th scope="row">{release.id}</th>
                                    <td>{release.releaseName}</td>
                                    <td>{this.state.teste}</td>
                                </tr>
                            )
                        })}

                    </tbody>
                </table>
            </div>
        );
    }
}