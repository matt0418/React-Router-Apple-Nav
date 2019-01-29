import React from 'react';
import { Route, NavLink } from 'react-router-dom'
import Mac from './Mac'
import IPad from './iPad'
import IPhone from './iPhone'
import Watch from './Watch'
import TV from './TV'
import Music from './Music'
import Support from './Support'

function NavBar(props) {
    return(
        <div className="main-nav">
            <nav>
                <NavLink to="/mac">
                    Mac
                </NavLink>
                <NavLink to="/ipad">
                    iPad
                </NavLink>
                <NavLink to="/iphone">
                    iPhone
                </NavLink>
                <NavLink to="/watch">
                    Watch
                </NavLink>
                <NavLink to="/tv">
                    TV
                </NavLink>
                <NavLink to="/music">
                    Music
                </NavLink>
                <NavLink to="/support">
                    Support
                </NavLink>
            </nav>
            <Route 
            path="/mac"
            render={props => <Mac {...props}/>}
            />
            <Route 
            path="/ipad"
            render={props => <IPad {...props}/>}
            />
            <Route 
            path="/iphone"
            render={props => <IPhone {...props}/>}
            />
            <Route 
            path="/watch"
            render={props => <Watch {...props}/>}
            />
            <Route 
            path="/tv"
            render={props => <TV {...props}/>}
            />
            <Route 
            path="/music"
            render={props => <Music {...props}/>}
            />
            <Route 
            path="/support"
            render={props => <Support {...props}/>}
            />
        </div>
    )
}

export default NavBar