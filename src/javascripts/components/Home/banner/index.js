
import axios from 'axios'
import React,{Component} from 'react'

import { Carousel } from 'antd-mobile'

import {Link} from 'react-router'

class Banner extends Component {
	constructor(props){
		super(props)
		
		this.state = {
			imgHeight:'',
			banners: []
		}
	}

	componentWillMount(){
		let that = this
		axios.get('/mz/v4/api/billboard/home', {
			__t:new Date().getTime()
		})
		.then(function ({data}) {
			that.setState({
				banners: data.data.billboards
			})
		})
	}

	render(){
		let {banners} = this.state
		
		return (
			<div className="home-silder">
                <Carousel
					style={{zIndex:1}}
					autoplay={true}
					dots={false}
					infinite={true}
					selectedIndex={1}
					>
					{banners.map(val => (
						
						<img
							src={val.imageUrl}
							alt={val.name}
							style={{ width: '100%', verticalAlign: 'top' }}
							key={val.id}
							onLoad={() => {
							window.dispatchEvent(new Event('resize'));
							this.setState({ imgHeight: 'auto' });
							}}
						/>
						
					))}
				</Carousel>
			</div>
		)
		
	}
	
}

export default Banner
