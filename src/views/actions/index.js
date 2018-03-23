import {
	myActs
} from '../constant/action-type'

export function changeModalVis(modal_visibility) {
	return {
		type: myActs.MODAL_VISIBLITY,
		modal_visibility
	}
}