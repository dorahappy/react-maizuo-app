import React, { Component } from 'react'
import { Link } from 'react-router'


class FilmHeader extends Component {

	constructor(props){
		super(props)
		this.state = {

		}
	}

	render(){
		let {type} = this.props
		return (
			<div className="app-film">
                <div className="film-list-nav">
					<Link to="/film?now-playing">
						<div 
							className={type==="now-playing"?"now-playing active":"now-playing"}
							onClick={this.props.changeTypeToNow}
						>正在热映</div>
					</Link>
					<Link to="/film?coming-soon">
						<div 
							className={type==="coming-soon"?"coming-soon active":"coming-soon"}
							onClick={this.props.changeTypeToCom}
						>即将上映</div>
					</Link>
				</div>
			</div>
		);
	}
}

export default FilmHeader
