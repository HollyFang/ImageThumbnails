import React from 'react';
import Thumbnail from '../components/thumbnail/index.jsx';
import Modal from '../components/modal/index.jsx';
import '../css/dark-theme.css'
import * as actionFuns from '../actions'
import {
    connect
} from 'react-redux';
import {
    bindActionCreators
} from 'redux';
function mapStateToProps(state) {
    return {
        data: state
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actionFuns, dispatch)
    }
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            title:null,
            childElement:null
        }
    }
    showDetails(e){
        //debugger
        let imgTitle=`${e.currentTarget.id.split('-')[1]}.jpeg`;
        let childElement=[<h3 key="title">my title is ${imgTitle}</h3>,
        <p key="desc">Hi, I'm the description of ${imgTitle}~</p>,
        <div key="btn" className='clickable' onClick={()=>this.props.actions["changeModalVis"](false)}>OKay~</div>];
        this.props.actions["changeModalVis"](true);
        this.setState({
            title:`Details of image.`,
            childElement:<Thumbnail imgSrc={`images/${imgTitle}`}
                childElement={childElement} />
        });
    }
    render() {
        const {
            title,
            childElement
        }=this.state;
        
        const {
            modal_visibility
        } = this.props.data;
        let imgs=[];
        for (let i = 1; i <11;i++) {
            imgs.push(<Thumbnail key={i} idKey={i} imgSrc={`thumbnails/${i}.jpeg`} imgAlt={i}
                className='clickable'
                clickEvent={this.showDetails.bind(this)} 
                childElement={<p>{`This is ${i}`}</p>} />);
        }
        return (
            <div>
                <header><h2>This is my page header.</h2></header>
                <div className="container center">
                    {imgs}
                </div>
                <Modal childElement={childElement} show={modal_visibility} />
            </div>
        )
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(App);