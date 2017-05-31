import React, { Component } from 'react'							
import { NavLink } from 'react-router-dom'

export default class Header extends Component {
	authButton() {
		return <button>Signin</button>
	}
	render() {
		return (
			<nav className="navbar navbar-light">
				<ul className="nav navbar-nav">
					<li className="nav-item">
						<NavLink to="/">Home</NavLink>
					</li>
					<li className="nav-item">
						<NavLink to="/resources">Resources</NavLink>
					</li>
					<li className="nav-item">
						{this.authButton()}
					</li>					
				</ul>
			</nav>
		)
	}
}