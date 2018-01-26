import React, { Component } from 'react'

import FilmHeader from './filmheader'


class FilmContentItem extends Component {

	constructor(props){
		super(props)
		this.state = {
            
		}
	}

	formatDate(value){
        var date = new Date(value)
	    return `${date.getMonth()+1}月${date.getDate()}日上映`
	}
	
	formatDay=(value)=>{
		var date = new Date(value)
		let day = date.getDay()
		let h = '星期'
		switch(day){
			case 1:h+='一';break;
			case 2:h+='二';break;
			case 3:h+='三';break;
			case 4:h+='四';break;
			case 5:h+='五';break;
			case 6:h+='六';break;
			case 7:h+='日';break;
		}
		
		return  h
	}

	render(){
		let {film} = this.props
		let {type} = this.state
		return (
			<div className="app-film-content-item">
				<div className="film-img">
					<img src={film.poster.thumbnail} alt={film.name}/>
				</div>
				<div className="film-title">
					<h5>
						<span>{film.name}</span>
						<div>
						{
							film.isNowPlaying?<span>{film.grade}     </span>:null
						}
							<i className="fa fa-angle-right"></i></div>
					</h5>
					<div>{film.intro}</div>
					{
						film.isNowPlaying?<p>
						<span>{film.cinemaCount}</span>家影院上映<span className="item-space"></span><span>{film.watchCount}</span>人购票
					</p>:<p>
						<span className="film-date">{this.formatDate(film.premiereAt)}</span><span className="item-space"></span><span className="film-date">{this.formatDay(film.premiereAt)}</span>
					</p>
					}
					
					<p className="p-active"></p>
				</div>
			</div>
		)
	}
}

export default FilmContentItem
