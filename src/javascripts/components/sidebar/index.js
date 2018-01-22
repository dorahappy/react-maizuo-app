
import React,{Component} from 'react'
import { Drawer, List, NavBar, Icon } from 'antd-mobile'

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
        console.log(args);
        this.setState({ open: !this.state.open });
    }
    render() {
        // fix in codepen
        const sidebar = (<List className="sidebar-nav">
        {['首页', '影片', '影院', '商城', '我的'].map((i, index) => {
            return (<List.Item className="sidebar-nav-item" key={index}
            >{i}<i className="mui-icon mui-icon-arrowright"></i></List.Item>);
        })}
        </List>);

        return (<div>
        <Header onOpenChange = {this.onOpenChange}/>
        <Drawer
            className="my-drawer"
            style={{ minHeight: document.documentElement.clientHeight,top:50, width: document.documentElement.clientWidth }}
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