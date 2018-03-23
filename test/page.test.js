
import {expect} from 'chai'
import React from 'react'
import ReactTestUtils from 'react-dom/test-utils';
import { Provider } from 'react-redux'
import App from '../src/views/pages'
import store from '../src/views/stores'
import { findDOMNode } from "react-dom"
require('jsdom-global')()

function setup() {
 return ReactTestUtils.renderIntoDocument(
    <Provider store={store}>
      <App />
    </Provider>
  )
}

describe('My page test:', () => {
	
	const app=setup();
	const realDom=findDOMNode(app);
	const thumbnails=realDom.querySelectorAll('.thumbnail');
	const modals=realDom.querySelectorAll('.modal');

  it('should have 10 thumbnails', function() {
  	console.log('*****',thumbnails.length);
    expect(thumbnails.length).to.be.equal(10);
  });
  it('should have 1 modal', function() {
    expect(modals.length).to.be.equal(1);
  });
  it('modal should be hide', function() {
    expect(modals[0].className).to.be.equal("modal hidden");
  });
  it('modal should be show', function() {
		ReactTestUtils.Simulate.click(thumbnails[0]);
    expect(modals[0].className).to.be.not.equal("modal hidden");
  });
});