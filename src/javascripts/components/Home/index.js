import React, { Component } from 'react'
import Banner from './banner'
import Content from './content'
import {connect} from 'react-redux'

import actions from '../../../redux/actions'


//import logo from '../assets/logo.svg';
class Home extends Component {


	componentWillMount(){
		this.props.changeHeaderTitle('卖座电影')
	}

	render(){
		return (
			<div>
				<Banner/>
				<Content/>
			</div>
		);
	}
}

let mapDispatchToProps = (dispatch)=>{
	return {
		changeHeaderTitle:actions.changeHeaderTitle
	}
}

export default connect(state=>state,mapDispatchToProps)(Home)
