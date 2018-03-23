import React from 'react';
import './thumbnail.css'

class Thumbnail extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		//debugger
        const {
            clickEvent,
            childElement,
            imgSrc,
            imgAlt,
            idKey,
            className
        } = this.props;
		 
		return (
			<div id={`thumbnail-${idKey}`} className={`thumbnail ${className}`} onClick={clickEvent}>
				<img src={imgSrc} alt={imgAlt}/>
				{childElement}
			</div>
		);
	}
};
export default Thumbnail;