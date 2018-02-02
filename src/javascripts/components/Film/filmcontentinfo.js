import React, { Component } from 'react'

import FilmContentItem from './filmcontentitem'
import {Link} from 'react-router'

class FilmContentInfo extends Component {

	constructor(props){
		super(props)
		this.state = {
			
		}
	}


	

	render(){
		let { filmcontent } = this.props
		return (
			<div className="app-film-content-info">
				{
					filmcontent.map(item=>{
						return (
							<Link to={`detail/${item.id}`} key={item.id}>
								<FilmContentItem film={item} />
							</Link>
						)
					})
				}
			</div>
		)
	}
}

export default FilmContentInfo

