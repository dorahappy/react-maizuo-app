import React, { Component } from 'react'
import { Toast } from 'antd-mobile';
import axios from 'axios'

import FilmHeader from './filmheader'
import FilmContent from './filmcontent'


class Film extends Component {

	constructor(props){
		super(props)
		this.state = {
			type: this.props.location.search.substr(1),
			count:7,
            page:1,
			filmcontent:[],
			isloadingshow:false
		}
		this.changeTypeToNow = this.changeTypeToNow.bind(this)
		this.changeTypeToCom = this.changeTypeToCom.bind(this)
	}

	changeTypeToNow = ()=>{
		if(this.state.type.type==="now-playing"){
			return ;
		}
		this.setState({
			type: "now-playing"
		})
		setTimeout(()=>{
			this.getData()
		})
	}

	getData(){
		let that = this
		// Toast.loading({
		// 	content:"正在刷新...",
		// 	mask: true
		// })
		Toast.loading(
			'正在加载...',
			5,
			()=>{},
			true
		);
		axios.get('/mz/v4/api/film/'+this.state.type, {
			params: {
				__t:new Date().getTime(),
				page:this.state.page,
				count:this.state.count
			}
		})
		.then(function ({data}) {
			that.setState({
				filmcontent: data.data.films
			})
			Toast.hide();
		})
	}

	changeTypeToCom = ()=>{
		if(this.state.type.type==="coming-soon"){
			return ;
		}
		this.setState({
			type: "coming-soon"
		})
		setTimeout(()=>{
			this.getData()
		})
		
	}

	componentWillMount(){
		console.log(this.state.type)
		this.getData()
	}

	render(){
		
		let {type, filmcontent, isloadingshow} = this.state
		return (
			<div>
				<FilmHeader isloadingshow={isloadingshow} type={type} changeTypeToNow={this.changeTypeToNow} changeTypeToCom={this.changeTypeToCom}/>
				<FilmContent filmcontent={filmcontent}/>
			</div>
		)
	}
}

export default Film
