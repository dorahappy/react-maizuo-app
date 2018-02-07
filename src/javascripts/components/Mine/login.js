import React, { Component } from 'react'
import {Link} from 'react-router'

import FormInput from '../common/form/formInput'
//import logo from '../assets/logo.svg';
class Mine extends Component {
	render(){
		return (
			
				<form className="form">
					<FormInput label={'手机号'} />
					<FormInput label={'密码'} type={'password'} />
					<div className="btn">
						<button>登录</button>
						<Link to='/mine/register'>去注册？</Link>
					</div>
				</form>
			
		);
	}
}

export default Mine
