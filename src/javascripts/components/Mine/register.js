import React, { Component } from 'react'
import {Link} from "react-router"

import FormInput from '../common/form/formInput'
//import logo from '../assets/logo.svg';
class Mine extends Component {
	render(){
		return (
			<div >
				<form className="form">
					<FormInput label={'手机号'} />
					<FormInput label={'密码'} type={'password'} />
					<FormInput label={'确认密码'} type={'password'} />
					<div className="btn">
						<button>注册</button>
						<Link to='/mine/login'>去登录？</Link>
					</div>
				</form>
			</div>
		);
	}
}

export default Mine
