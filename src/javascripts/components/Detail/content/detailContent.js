
import React,{Component} from 'react'


class DetailContent extends Component {
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
        let item = this.props.item
		let cover = item.cover
		let actors = item.actors
//		{console.log(actors)}
        return (
        	
        	<div className="detail">
        		<div className="detailImg">
        			<img src={cover ? cover.origin : ''} alt={item.name}/>
        		</div>
        		<div className="detailTitle">影片简介</div>
        		<div className="detailWord">
        			<span data-reactid=".0.1.$FilmDetailView-4071.2.1.0">导&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;演：</span>
        			<span data-reactid=".0.1.$FilmDetailView-4071.2.1.1">{item.director}</span>
        		</div>
        		<ul className="actors">
        		<span>主&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;演：</span>
        			{
        				actors ? actors.map((info,i)=>{
        					return(
        						<li key={i}>{info.name}</li>
        					)
        				}) : ""
        				
        			}
        		</ul>
        		<div className="detailWord">地区语言：<span>{item.nation}</span><span>({item.language})</span></div>
        		<div className="detailWord"><span >类&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;型：</span><span>{item.category}</span></div>
        		<div className="detailWord"><span >上映日期：</span>{this.formatDate(item.premiereAt)}</div>
        		<div className="detailWord1">{item.synopsis}</div>
        		<div className="buyTicket">立即购票</div>
        	</div>
        	)
    }
}

export default DetailContent