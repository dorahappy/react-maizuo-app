
import React,{Component} from 'react'
import axios from 'axios'

import CityItem from './city'


class City extends Component {

    constructor(props){
		super(props)
		this.state = {
            hots: ['北京', '上海', '广州', '深圳'],
            firstFights: {A: [], B: [], C: [], D: [], E: [], F: [], G: [], H: [], J: [], K: [], L: [], M: [], N: [], P: [], Q: [], R: [], S: [], T: [], W: [], X: [], Y: [], Z: []},
            cities:[],
            city:[],
            isLoad: false
        }
    }
    
    getCity(key){
        this.state.cities.forEach((ct, i)=>{
            if(ct.pinyin.substr(0, 1)===key){
                this.state.firstFights[key].push(ct)
            }
        })
    }

    
    componentWillMount(){
        this.setState({
            isLoad: false

        })
		axios.get('http://localhost:3000/mz/v4/api/city', {
            params: {
                __t:new Date().getTime()
            } 
        })
        .then((res)=>{
            this.setState({
                cities: res.data.data.cities,
                isLoad: true
            })
            for(var key in this.firstFights){
                this.getCity(key)
            }
            console.log(this.state.cities)
        })
    }
    
    shouldComponentUpdate(){
        if(this.state.isLoad){
            return true;
        }else{
            return false;
        }
    }
    
	
	

	render(){
        let {hots, firstFights} = this.state
        console.log(firstFights['A'])
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
                        Object.keys(firstFights).map((item, i)=>(
                            <a key={i}>{item}</a>
                        ))
                    }
                </ul>
                {
                    Object.keys(firstFights).map((item, i)=>(
                        <div key={i}>
                            <div>{item}</div>
                            <CityItem cityinfo={firstFights.item}/>
                        </div>
                    ))
                }
            </div>
		)
		
	}
	
}

export default City
