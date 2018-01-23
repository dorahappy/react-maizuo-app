
const defaultState={
	cars:localStorage.carts?JSON.parse(localStorage.carts):[]
}

const reducer = (state = defaultState,action)=>{
	
	let new_state = Object.assign({},state)
	
	switch(action.type){
		case 'CHANGE_CARS':
			
			new_state.cars = action.cars;
			console.log(new_state.cars)
			return new_state;break;
			
		default:return new_state;break;
	}
	
	
}

export default reducer