import React, { Component } from 'react'

import {hashHistory} from 'react-router'

//import logo from '../assets/logo.svg';
class Mine extends Component {
	constructor(props){
		super(props);
	}
	componentDidMount(){
		hashHistory.push('/mine/login')
	}
	render(){
		return (
			<div className="mine">
				{this.props.children}
			</div>
		);
	}
}

export default Mine
