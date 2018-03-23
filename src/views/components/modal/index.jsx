import React from 'react';
class Modal extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		}
	}
	render() {
        const {
        	show,
        	childElement,
        	title
        } = this.props;
        
		return (
			<div className={"modal "+(show?"":"hidden")}>
				<h3>{title}</h3>
				{childElement}
			</div>
		);
	}
}

export default Modal;