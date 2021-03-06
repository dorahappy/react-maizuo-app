
import React,{Component} from 'react'
import axios from 'axios'

import ContentComingItem from '../common/ContentComingItem'

class ContentComing extends Component {
    constructor(props){
		super(props)
		this.state = {
            contentComing: []
        }
	}
    
    componentWillMount(){
		let that = this
		axios.get('mz/v4/api/film/coming-soon', {
            params: {
                __t:new Date().getTime(),
                page:1,
                count:3
            }
            
		})
		.then(function ({data}) {
			that.setState({
				contentComing: data.data.films
			})
        })
	}

    render() {
        

        return (
            <ul className="home-content">
                {
                    this.state.contentComing.map(item=>{
                        return (
                            <li key={item.id}>
                                <ContentComingItem item={item}/>
                            </li>
                        )
                    })
                }
            
            </ul>
        )
    }
}

export default ContentComing