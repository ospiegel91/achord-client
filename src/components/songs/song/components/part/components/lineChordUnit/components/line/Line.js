import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateLine } from '../../../../../../../../../actions';
import axios from 'axios';

class Line extends Component {
    handleLineWordsChange = async (e) => {
        const values = {
            song: this.props.song._id, 
            part: this.props.partID, 
            line: this.props.line._id,
            text: e.target.value
        }
        this.props.updateLine(values);
    }


    render(){
        const { line } = this.props;
        return (
            <input onBlur={this.handleLineWordsChange} type="text" key={line._id} defaultValue={line.words}></input>
        )
    }
}


function mapStateToProps({song}){
    return { song };
}


export default connect(mapStateToProps, {updateLine})(Line);

