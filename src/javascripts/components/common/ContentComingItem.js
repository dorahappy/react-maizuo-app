
import React,{Component} from 'react'


class ContentComingItem extends Component {
    constructor(props){
		super(props)
		this.state = {
            
        }
	}
    
    formatDate(value){
        var date = new Date(value)
	    return `${date.getMonth()+1}月${date.getDate()}日上映`
    }


    render() {
        let { item } = this.props

        return (<div className="content-item">
            <div className="content-item-img">
                <img src={item.cover.origin} alt={item.name}/>
            </div>
            <div className="content-item-com-title">
                <div className="title-left">
                    {item.name}
                </div>
                <div className="title-com-right">{this.formatDate(item.premiereAt)}</div>
            </div>
        </div>)
    }
}

export default ContentComingItem