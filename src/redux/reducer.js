
const defaultState={
	headerTitle: '卖座电影',
	homeData:{},
	citiesInfo: []
}

const reducer = (state = defaultState,action)=>{
	
	let new_state = Object.assign({},state)
	
	switch(action.type){
		case 'CHANGE_HEADERTITLE':
			new_state.headerTitle = action.headerTitle
			return new_state;break;

		default:return new_state;break;
	}
	
	
}

export default reducer