
import React,{Component} from 'react'
import axios from 'axios'
import {connect} from 'react-redux'

import CityItem from './city'
import actions from '../../../redux/actions'


class City extends Component {

    constructor(props){
		super(props)
		this.state = {
            hots: ['北京', '上海', '广州', '深圳'],
            firstFights: ['A', 'B', 'C', 'D', 'E', 'F','G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'W', 'X', 'Y','Z'],
            cities: [],
            isLoad: false
        }
        this.toFirst = this.toFirst.bind(this)
    }

    toFirst(id){
        // console.log(this)
        // this.props.history.push({path: '/'+id})
    }
    
    componentWillMount(){
        this.setState({
            isLoad: false
        })
        this.props.changeHeaderTitle('选择城市')
        let that = this
        this.setState({
            isLoad: false
        })
		axios.get('http://localhost:3000/mz/v4/api/city', {
            params: {
                __t:new Date().getTime()
            } 
        })
        .then((res)=>{
            that.setState({
                cities: res.data.data.cities,
                isLoad: true
            })
        })
    }
    
	render(){
        let {hots, firstFights, cities, isLoad} = this.state
		return (
            <div className="app-city">
                <div className="city-title">GPS定位你所在城市</div>
                <ul>
                    <li className="gps">深圳</li>
                </ul>
                <div className="city-title">热门城市</div>
                <ul>
                    {
                        hots.map((item, i)=>(
                            <li key={i}>{item}</li>
                        ))
                    }
                    
                </ul>
                <div className="city-title">按字母排序</div>
                <ul>
                    {
                        firstFights.map((item, i)=>(
                            <a onClick={this.toFirst.bind(this,item)} key={i}>{item}</a>
                        ))
                    }
                </ul>
                {
                    firstFights.map((item, i)=>(
                        <div key={i} id={item}>
                            <div className="city-title">{item}</div>
                            <CityItem ref='cityitem' cities={cities} key={i} isLoad={isLoad} citykey={item}/>
                        </div>
                    ))
                }
            </div>
		)
		
	}
	
}

let mapDispatchToProps = (dispatch)=>{
	return {
		changeHeaderTitle:actions.changeHeaderTitle
	}
}


export default connect(state=>state,mapDispatchToProps)(City)
