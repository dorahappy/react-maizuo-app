
import axios from 'axios'
import React,{Component} from 'react'

import { Carousel } from 'antd-mobile'

class Banner extends Component {
	constructor(props){
		super(props)
		
		this.state = {
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
					autoplay={true}
					dots={false}
					infinite
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
