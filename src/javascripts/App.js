import React, { Component } from 'react'

import Sidebar from './components/sidebar'


//import logo from '../assets/logo.svg';
class App extends Component {
	render(){
		return (
			<div>
				<Sidebar/>
				<div className="app-content">
					{this.props.children}
				</div>
			</div>
		);
	}
}

export default App;
