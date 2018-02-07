import React, { Component } from 'react'
import { Toast } from 'antd-mobile'
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
			total: 0,
			filmcontent:[],
			isloadingshow:false,
			st: 0
		}
		this.changeTypeToNow = this.changeTypeToNow.bind(this)
		this.changeTypeToCom = this.changeTypeToCom.bind(this)
		this.handleScroll = this.handleScroll.bind(this)
	}

	changeTypeToNow = ()=>{
		if(this.state.type.type==="now-playing"){
			return ;
		}
		this.setState({
			type: "now-playing",
			page: 1,
			filmcontent: []
		})
		setTimeout(()=>{
			this.getData()
		})
	}

	getData(){
		let that = this
		window.removeEventListener('scroll', this.handleScroll)
		this.setState({
			isloadingshow: false
		})
		Toast.loading(
			'正在加载...',
			5,
			()=>{},
			true
		)
		axios.get('/mz/v4/api/film/'+this.state.type, {
			params: {
				page:this.state.page,
				count:this.state.count
			}
		})
		.then(function ({data}) {
			console.log(data)
			that.setState({
				filmcontent:that.state.filmcontent.concat(data.data.films),
				isloadingshow: true,
				total: data.data.page.total,
				page: ++that.state.page
			})
			Toast.hide()
			window.addEventListener('scroll', that.handleScroll);
			
		})
	}

	changeTypeToCom = ()=>{
		if(this.state.type.type==="coming-soon"){
			return ;
		}
		this.setState({
			type: "coming-soon",
			page: 1,
			filmcontent: []
		})

		setTimeout(()=>{
			this.getData()
		})
		
	}

	componentWillMount(){
		this.getData()
	}

	componentDidMount() {
		window.addEventListener('scroll', this.handleScroll)
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.handleScroll)
	}

	handleScroll(e) {
		let sh = e.path[0].scrollingElement.scrollHeight
		let ch = e.path[0].scrollingElement.clientHeight
		this.setState({
			st:e.path[0].scrollingElement.scrollTop
		})

		if(this.state.st>sh-ch-100){
			if(this.state.page<=this.state.total){
				this.getData()
				console.log(this.state.page)

				if(this.state.st>sh-ch-200){
					if(this.state.page<=this.state.total){
						this.getData()
		
					}else{
						return ;
					}
				}
			}
		}
	}
	shouldComponentUpdate(){
		if(!this.state.isloadingshow){
			return true
		}else{
			return false
		}
	}


	render(){

		let {type, filmcontent, isloadingshow} = this.state
		return (
			<div>
				<FilmHeader isloadingshow={isloadingshow} type={type} changeTypeToNow={this.changeTypeToNow} changeTypeToCom={this.changeTypeToCom}/>
				{
					isloadingshow?<FilmContent filmcontent={filmcontent}/>:null
				}
				
			</div>
		)
	}
}

export default Film
