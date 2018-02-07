
import React,{Component} from 'react'
import axios from 'axios'


class CityItem extends Component {

    constructor(props){
		super(props)
		this.state = {
            city:[],
            cities:[],
            isLoad: false
        }
        this.getCity = this.getCity.bind(this)
    }
    
    getCity(key, nextprops){
        let city = []
        nextprops.cities.forEach((ct, i)=>{
            if(ct.pinyin.substr(0, 1)===key){
                city.push(ct)
            }
        })
        console.log(city)
        let that = this
        // setTimeout(()=>{
        //     that.setState({
        //         city,
        //         isLoad: true
        //     })
        //     console.log(this.state.city)
        // }, 0)
        
        this.setState({
            city,
            isLoad: true
        }, ()=>{
            console.log(this.state.city)
        })
    }

    shouldComponentUpdate(nextprops,nextstate){
        this.getCity(this.props.citykey, nextprops)
        return true
    }
	
	render(){
        let {city} = this.state
		return (
            <ul>
                {
                    city.map((item, i)=>(
                        <li key={i}>{item}</li>
                    ))
                }
            </ul>
        )
    }
	
}

export default CityItem
