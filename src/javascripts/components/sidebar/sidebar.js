
import React,{Component} from 'react'

import { Link } from 'react-router'


class Sidebar extends Component {
    constructor(props){
		super(props)
		this.state = {
            
        }
        
	}


   
    render() {
        return (
            <div className='sidebar-container'>
                <div className="sidebar-overlay" onClick={this.props.changeShow}>
                    <div className="app-sidebar">
                        <ul>
                            {[{title:'首页',path:'/'}, {title:'影片',path:'/film'}, {title:'影院',path:'/movie'}, {title:'我的',path:'/mine'}].map((i, index) => {
                                return <Link className="sidebar-nav" to={i.path} key={index} >
                                    <span>{i.title}</span>
                                    <i className="mui-icon mui-icon-arrowright"></i>
                                </Link>
                            })}
                        </ul>
                    </div>  
                </div>
            </div>
        )
    }
}

export default Sidebar