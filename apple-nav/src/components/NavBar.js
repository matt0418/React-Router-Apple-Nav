import React from 'react';
import { Route, NavLink } from 'react-router-dom'
import Mac from './Mac'
import IPad from './iPad'
import IPhone from './iPhone'
import Watch from './Watch'
import TV from './TV'
import Music from './Music'
import Support from './Support'
import styled from 'styled-components'

const Apple = styled.img`
    width: 2%;
`

function NavBar(props) {
    return(
        <div className="main-nav">
            <nav>
                <NavLink to="/">
                    <Apple src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCAyOTEuNTM4IDI5MS41MzgiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDI5MS41MzggMjkxLjUzODsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSI1MTJweCI+CjxnPgoJPHBhdGggc3R5bGU9ImZpbGw6I0NDRDBEMjsiIGQ9Ik0xODguMzczLDQ0LjMwOGMxMC45Ny0xMS43NDQsMTguMzktMjguMDQ5LDE2LjM1OS00NC4zMDhjLTE1LjgwNCwwLjU2NC0zNC45NTgsOS4yNzctNDYuMzAyLDIxLjAyICAgYy0xMC4xNjksMTAuMzk2LTE5LjA3MiwyNy4wMTEtMTYuNjk2LDQyLjk1MUMxNTkuMzY5LDY1LjE2NCwxNzcuMzg1LDU2LjAzMywxODguMzczLDQ0LjMwOHogTTIyMi4wMywxNTYuNTkzICAgYy0wLjMzNy0zNi40NTEsMjguODU5LTUzLjk1OCwzMC4xNTItNTQuODA0Yy0xNi40MTQtMjQuNzUzLTQxLjk3Ny0yOC4xNC01MS4wODEtMjguNTIyYy0yMS43NjctMi4yODUtNDIuNDQyLDEzLjE4Mi01My40OTMsMTMuMTgyICAgYy0xMS4wMDYsMC0yOC4wMy0xMi44ODItNDYuMDgzLTEyLjUzNmMtMjMuNzMzLDAuMzkxLTQ1LjYwMSwxNC4yMTEtNTcuNzksMzYuMTE0QzE5LjA4MSwxNTQuMDksMzcuNDE2LDIxOS4zNjMsNjEuNDQsMjU1LjEwNCAgIGMxMS43NDQsMTcuNDk3LDI1LjcyNywzNy4xMjUsNDQuMDg5LDM2LjQxNWMxNy43MjUtMC43MSwyNC40MDctMTEuNzg5LDQ1Ljc5Mi0xMS43ODljMjEuMzk0LDAsMjcuMzg0LDExLjc4OSw0Ni4xMDEsMTEuNDM0ICAgYzE5LjA0NS0wLjM1NSwzMS4wOTgtMTcuODM0LDQyLjc0Mi0zNS4zODZjMTMuNDczLTIwLjI5MiwxOS4wMjctMzkuOTM4LDE5LjM0NS00MC45MyAgIEMyNTkuMSwyMTQuNjExLDIyMi40MjEsMjAwLjE4MiwyMjIuMDMsMTU2LjU5M3oiLz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K"/>
                </NavLink>
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