import React, { Component } from 'react'
import axios from 'axios'
import {connect} from 'react-redux'

import MovieItem from './movieItem'

import actions from '../../../redux/actions'


class Movie extends Component {
	constructor(props){
		super(props);
		this.state={
			moviePosition:[],
			position:[
				{id:1,name:'密云区',pinyin:"mi-yun-qu"},
				{id:2,name:'朝阳区',pinyin:"zhao-yang-qu"},
				{id:3,name:'西城区',pinyin:"xi-cheng-qu"},
				{id:4,name:'海淀区',pinyin:"hai-dian-qu"},
				{id:5,name:'大兴区',pinyin:"da-xing-qu"},
				{id:6,name:'东城区',pinyin:"dong-cheng-qu"},
				{id:7,name:'丰台区',pinyin:"feng-tai-qu"},
				{id:8,name:'昌平区',pinyin:"chang-ping-qu"},
				{id:9,name:'房山区',pinyin:"fang-shan-qu"},
				{id:10,name:'平谷区',pinyin:"ping-gu-qu"},
				{id:11,name:'延庆区',pinyin:"yan-qing-qu"},
				{id:12,name:'通州区',pinyin:"tong-zhou-qu"},
				{id:13,name:'石景山区',pinyin:"shi-jing-shan-qu"},
				{id:14,name:'门头沟区',pinyin:"men-tou-gou-qu"},
				{id:15,name:'怀柔区',pinyin:"huai-rou-qu"}
			]
		}
		
	}
	
	componentWillMount(){
		let that = this
		axios.get('/mz/v4/api/cinema',{
			params:{
				__t:new Date().getTime()
			}
		}).then(function({data}){
			that.setState({
				moviePosition: data.data.cinemas,
			})
		})
		this.props.changeHeaderTitle('全部影院')
	}

	render(){
		var show= this.state.show?"block":"none";
        var style = {
            display:show,
        }
		let {position} = this.state
		let movies = this.state.moviePosition
		let that = this
		return (
			<div className="movie">
				<ul>		
					{
						position.map(item =>(
							<MovieItem key={item.id} movies={movies} item={item}/>
						))
					}
				</ul>
				
			</div>
		)
	}
}


let mapDispatchToProps = (dispatch)=>{
	return {
		changeHeaderTitle:actions.changeHeaderTitle
	}
}


export default connect(state=>state,mapDispatchToProps)(Movie)
