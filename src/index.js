import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Releases from './container/Releases';
import Home from './container/Home';
import registerServiceWorker from './registerServiceWorker';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Graficos from './container/Graficos';
import Mapa from './container/Mapa';
import LoginForm from './container/LoginForm';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers/index'

ReactDOM.render(
    <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
    <Router history={hashHistory}>
        <Route path='/' component={App} >
            <IndexRoute component={LoginForm} />
            <Route path='/releases' component={Releases} />
            <Route path='/graficos' component={Graficos} />
            <Route path='/mapa' component={Mapa}/>
        </Route>

    </Router>
    </Provider>
    ,document.getElementById('root'));
registerServiceWorker();
