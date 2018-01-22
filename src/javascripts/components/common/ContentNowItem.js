
import React,{Component} from 'react'


class ContentNowItem extends Component {
    constructor(props){
		super(props)
		this.state = {
            
        }
	}
    


    render() {
        let { item } = this.props

        return (<div className="content-item">
            <div className="content-item-img">
                <img src={item.cover.origin} alt={item.name}/>
            </div>
            <div className="content-item-title">
                <div className="title-left">
                    <span>{item.name}</span>
                    <span>{item.cinemaCount}家影院上映<span>       </span>{item.watchCount}人购票</span>
                </div>
                <div className="title-right">{item.grade}</div>
            </div>
        </div>)
    }
}

export default ContentNowItem