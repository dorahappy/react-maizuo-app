import React from "react"

class formInput extends React.Component{
	
	render(){
		let {label,type,name} = this.props
		return(
			<div className="form-input">
				<label>{label}</label>
				<input name={name} type={type||'text'}/>
			</div>
		)
	}
}

export default formInput