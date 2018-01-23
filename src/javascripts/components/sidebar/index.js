
import React,{Component} from 'react'
import { Drawer, List, NavBar, Icon } from 'antd-mobile'

import { Link } from 'react-router'

import Header from '../header'

class Sidebar extends Component {
    constructor(props){
		super(props)
		this.state = {
            open: false,
        }
        this.onOpenChange = this.onOpenChange.bind(this)
	}
    
    onOpenChange = (...args) => {
        this.setState({ open: !this.state.open });
    }
    render() {
        // fix in codepen
        const sidebar = (<List className="sidebar-nav">
        {[{title:'首页',path:'/'}, {title:'影片',path:'/film'}, {title:'影院',path:'/movie'}, {title:'我的',path:'/mine'}].map((i, index) => {
            return (<Link onClick={this.onOpenChange} to={i.path} key={index} className="sidebar-nav-item"
            >{i.title}<i className="mui-icon mui-icon-arrowright"></i>
            </Link>);
        })}
        </List>);

        return (<div>
        <Header onOpenChange = {this.onOpenChange}/>
        <Drawer
            className="my-drawer"
            style={{ minHeight: document.documentElement.clientHeight,top:50, width: document.documentElement.clientWidth,position: 'fixed', zIndex: 9999}}
            contentStyle={{ color: '#A6A6A6', textAlign: 'center', paddingTop: 50 }}
            sidebar={sidebar}
            open={this.state.open}
            onOpenChange={this.onOpenChange}
        >
        </Drawer>
        </div>);
    }
}

export default Sidebar