
import React,{Component} from 'react'
import {Link} from 'react-router'

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
                <Link to='/film?now-playing'><div className="more-button">更多热映电影</div></Link>
                <div className="dividing-line"><div className="upcoming">即将上映</div></div>
                <ContentComing/>
                <Link to='/film?coming-soon'><div className="more-button">更多即将上映电影</div></Link>
                
            </div>
        )
    }
}

export default Content