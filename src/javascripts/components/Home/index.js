import React, { Component } from 'react'
import Banner from './banner'
import Content from './content'


//import logo from '../assets/logo.svg';
class Home extends Component {
	render(){
		return (
			<div>
				<Banner/>
				<Content/>
			</div>
		);
	}
}

export default Home
