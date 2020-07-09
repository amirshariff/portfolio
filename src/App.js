import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/NavBar';
import NavbarBrand from 'react-bootstrap/NavbarBrand';
import Nav from 'react-bootstrap/Nav'


class App extends Component {
	state = {
		title: 'Amir Shariff',
		headerLinks: [
			{ title: 'Home', path: '/' },
			{ title: 'About', path: 'about' },
			{ title: 'Contact', path: 'contact' },
		],
		home: {
			title: 'Be Relentless',
			subtitle: 'Projects that make a diffrence',
			text: 'Checkout my projects below',
		},
		about: {
			title: 'About me',
		},
		contact: {
			title: 'Contact me',
		},
	};
	render() {
		return (
			<Router>
				<Container className="p-0" fluid={true}>
					<Navbar className="border-bottom" bg='transparent' expand='lg'>
						<NavbarBrand>Amir Shariff</NavbarBrand>
						<Navbar.Toggle className='border-0' aria-controls="navbar-toggle" />
						<Navbar.Collapse id="navbar-toggle">
							<Nav className='ml-auto'>
								<Link className="nav-link" to="/">
									Home
								</Link>
								<Link className="nav-link" to="/about">
									About
								</Link>
								<Link className="nav-link" to="/contact">
									Contact
								</Link>
							</Nav>
						</Navbar.Collapse>
					</Navbar>
				</Container>
			</Router>
		);
	}
}

export default App;
