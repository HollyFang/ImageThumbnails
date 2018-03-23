import React from 'react';
import './thumbnail.css'

class Thumbnail extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
        const {
            clickEvent,
            childElement,
            imgSrc,
            imgAlt
        } = this.props;
		 
		return (
			<div className="thumbnail" onClick={clickEvent}>
				<img src={imgSrc} alt={imgAlt}/>
				{childElement}
			</div>
		);
	}
};
export default Thumbnail;