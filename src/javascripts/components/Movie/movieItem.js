import React, { Component } from 'react'
import axios from 'axios'


class MovieItem extends Component {
	constructor(props){
		super(props);
		this.state={
			isShow:false
        }
        this.handleClick = this.handleClick.bind(this)
	}
	handleClick() {
		this.setState({
            isShow: !this.state.isShow
        })
    }

	render(){
        let {isShow} = this.state
		let {item,movies} = this.props
		return (
            <dl key={item.id}>
                <dt key={item.id}  data-index={item.id} className="position" onClick={this.handleClick}>{item.name}</dt>
                    {
                        movies.map(info=>(
                            item.pinyin == info.district.pinyin ?<dd className="movieDetail" style={isShow?{display:'block'}:{display:'none'}} key={info.id}>
                                <div className="movieLeft">
                                    <p>{info.name}</p>
                                    <li>{info.address}</li>
                                    <dl>距离未知</dl>
                                </div>
                                <div className="movieRight">
                                    <i className="fa fa-angle-right"></i>
                                </div>
                            </dd>:''

                            
                        ))
                    }
            </dl>
        )
		
		
	}
}

export default MovieItem
