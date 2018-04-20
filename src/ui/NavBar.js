import React from 'react';
import {Link} from 'react-router';

const NavBar = (props) => {
    return (
        <nav className="navbar navbar-toggleable-md navbar-light bg-faded" style = {{backgroundColor:'#9b9b9b', width:'50%',height:'100%'	}}>
            <Link to='/' className="navbar-brand">{props.logo}</Link>

            
        </nav>
    );
};

export default NavBar;