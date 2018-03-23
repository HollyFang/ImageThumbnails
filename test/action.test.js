
import { expect } from 'chai';
import * as actions from '../src/views/actions'
import {
	myActs
} from '../src/views/constant/action-type'

describe('actions', () => {
  it('hide modal -_-', () => {
  	let result=actions.changeModalVis(false);
    expect(result.type).to.be.equal(myActs.MODAL_VISIBLITY); 
    expect(result.modal_visibility).to.be.equal(false);
  })

  it('show modal -_-', () => {
  	let result=actions.changeModalVis(true);
    expect(result.type).to.be.equal(myActs.MODAL_VISIBLITY); 
    expect(result.modal_visibility).to.be.equal(true);
  })
});