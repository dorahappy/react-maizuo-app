import React, { Component } from 'react'
import {connect} from 'react-redux'

import actions from '../../../redux/actions'


//import logo from '../assets/logo.svg';
class Mine extends Component {

	componentWillMount(){
		this.props.changeHeaderTitle('登录')
	}

	render(){
		return (
			<div className="mine">
				<div className="acountNumber">
					<input type="text" placeholder="请输入手机号码/邮箱账号"/>
				</div>
			</div>
		);
	}
}

let mapDispatchToProps = (dispatch)=>{
	return {
		changeHeaderTitle:actions.changeHeaderTitle
	}
}


export default connect(state=>state,mapDispatchToProps)(Mine)
