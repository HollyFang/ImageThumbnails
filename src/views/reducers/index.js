import {
	myActs
} from '../constant/action-type'

const initState = {
	modal_visibility: null
}

function myReducer(state = initState, action) {
	switch (action.type) {
		case myActs.MODAL_VISIBLITY:
			return Object.assign({}, state, {
				modal_visibility: action.modal_visibility
			});
		default:
			return state;
	}
}

export default myReducer;