
import React,{Component} from 'react'


class CityItem extends Component {

    constructor(props){
		super(props)
		this.state = {
            
        }
	}
    
    
	
	

	render(){
        let {cityinfo} = this.props
		return (
            cityinfo? 
            <ul>
                {
                    cityinfo.map((item, i)=>(
                        <li key={i}>{item}</li>
                    ))
                }
                
            </ul>:null               
		)
		
	}
	
}

export default CityItem
