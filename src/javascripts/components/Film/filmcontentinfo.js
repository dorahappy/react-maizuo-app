import React, { Component } from 'react'

import FilmContentItem from './filmcontentitem'

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
						return (<FilmContentItem film={item} key={item.id}/>)
					})
				}
			</div>
		)
	}
}

export default FilmContentInfo