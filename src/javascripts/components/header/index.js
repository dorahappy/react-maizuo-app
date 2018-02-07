
import React,{Component} from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'


class Header extends Component {

	
	

	render(){
		return (
			<div className="header">
				<h1>
					<div onClick={this.props.changeShow}>
						<i className='mui-icon mui-icon-bars'></i>
					</div>
					<p>{this.props.headerTitle}</p>
				</h1>
				<div className='header-right'>
					<Link to="/city">
						<div>
							<span>北京</span>
							<span></span>
							<i className="mui-icon mui-icon-arrowdown"></i>
						</div>
					</Link>
					<Link to="/mine">
						<p>
							<i className='mui-icon mui-icon-person'></i>
						</p>
					</Link>
				</div>
			</div>
		)
		
	}
	
}

export default connect(state=>state)(Header)
