import React, { Component } from 'react'
import axios from 'axios'

import FilmContentItem from './filmcontentitem'
import FilmContentInfo from './filmcontentinfo'



class FilmContent extends Component {

	constructor(props){
		super(props)
		this.state = {
			
		}
	}

	

	render(){
		let { filmcontent } = this.props

		return (
			<div className="app-film-content">
				{
					filmcontent?<FilmContentInfo filmcontent={filmcontent}/>:null
				}
				
			</div>
		)
	}
}

export default FilmContent

