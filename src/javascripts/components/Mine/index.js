import React, { Component } from 'react'


//import logo from '../assets/logo.svg';
class Mine extends Component {
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

export default Mine
