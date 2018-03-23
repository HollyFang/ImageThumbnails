import React from 'react';
import './modal.css'
class Modal extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		}
	}
	render() {
        const {
        	show,
        	childElement
        } = this.props;

		return (
			<div className={"modal "+(show?"":"hidden")}>
				<div className="modal-content">
					{childElement}
				</div>
				<div className="modal-back">
				</div>
			</div>
		);
	}
}

export default Modal;