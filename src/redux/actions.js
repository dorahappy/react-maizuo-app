
import store from './store'
import change_headerTitle from './ActionCreators/change_headerTitle'
const actions = {
	
	changeHeaderTitle(title){
		let headerTitle = store.getState().headerTitle
		headerTitle = title
		store.dispatch(change_headerTitle(headerTitle))
	}

	
	
}


export default actions