
import store from './store'
import change_cars from './ActionCreators/change_cars'
const actions = {
	
	addGood({id,price,title}){
		let cars = store.getState().cars.map(good=>good)
		let isHas = cars.some(good=>{
			if(good.id==id){
				good.num++	
				return true
			}else{return false}
		})
		
		if(!isHas){
			cars.push({
				id,price,title,num:1
			})
		}
		localStorage.carts = JSON.stringify(cars)
		store.dispatch(change_cars(cars))
	},

	reduceGood({id}){
		let cars = store.getState().cars.map(good=>good)
		for (var i =0;i<cars.length;i++) {
			if(cars[i].id==id){
				cars[i].num--;
				if(cars[i].num<=0){
					cars.splice(i,1)
				}				
				break;
			}
		}
		
		localStorage.carts = JSON.stringify(cars)
		store.dispatch(change_cars(cars))
		
	}
	
}


export default actions