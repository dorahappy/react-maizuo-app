
import React,{Component} from 'react'

import ContentNow from './contentNow'
import ContentComing from './contentComing'

class Content extends Component {
    constructor(props){
		super(props)
		this.state = {
            contentNow: [],
            contentComing: []
        }
	}
    

    render() {
        

        return (
            <div>
                <ContentNow/>
                <div className="more-button">更多热映电影</div>
                <div className="dividing-line"><div className="upcoming">即将上映</div></div>
                <ContentComing/>
                <div className="more-button">更多即将上映电影</div>
            </div>
        )
    }
}

export default Content