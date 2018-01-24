
import React,{Component} from 'react'

import { Link } from 'react-router'


import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Header from '../header'
import Siderbar from './sidebar'

class Common extends Component {
    constructor(props){
		super(props)
		this.state = {
            show: false
        }
	}
    changeShow = () => {
        console.log("111")
        this.setState({
            show: !this.state.show
        });
    }


   
    render() {
        let {show} = this.state
        console.log(show)
        return (
            <div>   
                <Header changeShow={this.changeShow}/>
                <ReactCSSTransitionGroup
                    transitionAppear={true}
                    transitionEnter={true}
                    transitionLeave={true}
                    transitionEnterTimeout={400}
                    transitionLeaveTimeout={400}
                    transitionAppearTimeout={400}
                    transitionName="transition-sidebar"
                >
                    {
                        show?<Siderbar changeShow={this.changeShow}/>:null
                    }
                </ReactCSSTransitionGroup>
                    
            </div>
        )
    }
}

export default Common