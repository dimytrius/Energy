import React, { Component } from 'react';
import HomeCard from '../ui/HomeCard';
import {hashHistory} from 'react-router';



export default class Home extends Component {

    homeCardReleases = {
        title: 'Devices',
        text: 'Monitorar devices',
        action: () => hashHistory.push('/releases')
    }
    homeCardReleases1 = {
        title: 'Graficos',
        text: 'Mostrar graficos',
        action: () => hashHistory.push('/graficos')
    }
    homeCardReleases2 = {
        title: 'Mapa',
        text: 'Mostrar mapa',
        action: () => hashHistory.push('/mapa')
    }
    

    render() {
        return (
            <div className="container text-center" >
                <div className="row">
                    <HomeCard title={this.homeCardReleases.title}
                        text={this.homeCardReleases.text}
                        action={this.homeCardReleases.action} />
                     <HomeCard title={this.homeCardReleases1.title}
                        text={this.homeCardReleases1.text}
                        action={this.homeCardReleases1.action} />
                     <HomeCard title={this.homeCardReleases2.title}
                        text={this.homeCardReleases2.text}
                        action={this.homeCardReleases2.action} />
                    
                </div>
            </div>
        );
    }
}