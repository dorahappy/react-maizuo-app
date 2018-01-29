import React, { Component } from 'react'
import axios from 'axios'
import DetailContent from './content/detailContent'


//import logo from '../assets/logo.svg';
class Detail extends Component {
	constructor(props){
		super(props)
		this.state={
			detailMovie:{
			
			},
		}
	}
	
	componentWillMount(){
		const pathHash = this.props.location.pathname
		const hash = this.props.params.id
//		console.log(this.props.params.id)
		let that = this
		
		axios.get('mz/v4/api/film'+'/'+hash, {
            params: {
                __t:new Date().getTime()
            }
		}).then(function ({data}) {
			
			console.log(data)
			that.setState({
				detailMovie: data.data.film
			})
			
        })

	}

	render() {
		let detailInfo = this.state.detailMovie
		 return (
		 	<div className="detailContent">
		 		<DetailContent item={detailInfo}/>
		 	</div>
        )
	}
}

export default Detail
