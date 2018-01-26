
import React,{Component} from 'react'



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
        this.setState({
            show: !this.state.show
        });
    }


   
    render() {
        let {show} = this.state
        return (
            <div>   
                <Header changeShow={this.changeShow}/>
                <ReactCSSTransitionGroup
                    transitionEnter={true}
                    transitionLeave={true}
                    transitionEnterTimeout={400}
                    transitionLeaveTimeout={400}
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