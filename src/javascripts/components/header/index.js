
import React,{Component} from 'react'


class Header extends Component {

	
	

	render(){
		return (
			<div className="header">
				<h1>
					<div onClick={this.props.changeShow}>
						<i className='mui-icon mui-icon-bars'></i>
					</div>
					<p>卖座电影</p>
				</h1>
				<div className='header-right'>
					<div>
						<span>北京</span>
						<span> </span>
						<i className="mui-icon mui-icon-arrowdown"></i>
					</div>
					<p>
						<i className='mui-icon mui-icon-person'></i>
					</p>
				</div>
			</div>
		)
		
	}
	
}

export default Header
