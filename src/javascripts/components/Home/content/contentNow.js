
import React,{Component} from 'react'
import axios from 'axios'
import { Router, Route, hashHistory,Link } from 'react-router'

import ContentNowItem from '../../common/ContentNowItem'

class ContentNow extends Component {
    constructor(props){
		super(props)
		this.state = {
            contentNow: [],
            contentComing: []
        }
	}
    
    componentWillMount(){
		let that = this
		axios.get('mz/v4/api/film/now-playing', {
            params: {
                __t:new Date().getTime(),
                page:1,
                count:5
            }
		})
		.then(function ({data}) {
			that.setState({
				contentNow: data.data.films
			})
        })
	}

    render() {
	
        return (
            <ul className="home-content">
                {
                    this.state.contentNow.map(item=>{
                        return (
                            <li key={item.id}>
                            	<Link to={`detail/${item.id}`}>
                                	<ContentNowItem item={item}/>
                                </Link>
                            </li>
                        )
                    })
                    
                }
            
            </ul>
        )
    }
}

export default ContentNow