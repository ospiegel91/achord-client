import React, { Component } from 'react';
import { connect } from 'react-redux';
import Line from './components/line/Line';
import { addLine, emptyChords, changeDirection } from '../../../../../../../actions';
import styles from './css/lineChordUnit.module.css';
import ChordsLine from './components/chordsLine/ChordsLine.js';

class LineChordUnit extends Component {
    state = {
        lineMenuDisplay: 'none',
        moreButtonDisplay: 'block'
    }
    handleAddLineUnit = async () => {
        console.log('handle add line unit');
        const values = {
            song: this.props.song._id, 
            part: this.props.partID, 
            position: this.props.insertPosition,
        };
        this.props.addLine(values);

    }

    handleChangeDirection = async () => {
        console.log('handle change direction');
        const values = {
            song: this.props.song._id, 
            part: this.props.partID, 
            line: this.props.line._id,
        };
        this.props.changeDirection(values);

    }

    handleEmptyChords = async () => {
        console.log('handle empty chords');
        const values = {
            song: this.props.song._id, 
            part: this.props.partID, 
            line: this.props.line._id,
        };
        this.props.emptyChords(values);

    }

    handleLineMenuExpand = () => {
        return this.setState({
                lineMenuDisplay: 'block',
                moreButtonDisplay: 'none'
        })
    }

    handleLineMenuExit = () => {
        return this.setState({
            lineMenuDisplay: 'none',
            moreButtonDisplay: 'block'
        })
    }

    handleOptionSelected = (e) => {
        const selected = e.target.value;
        switch(selected){
            case "addLine":
                this.handleAddLineUnit();
            case "emptyChords":
                this.handleEmptyChords();
            case "changeDirection":
                console.log('change direction op selected')
                this.handleChangeDirection();
            e.target.selectedIndex = 0;

        }
    }
    render(){
        const directionOption = this.props.line.direction == "rtl" ? "ltr" : "rtl";
        return (
            <div dir={this.props.line.direction} className={styles.container}>
                <div className={styles.chordsContainer}>
                    <ChordsLine partID={this.props.partID} line={this.props.line}></ChordsLine>
                    <Line partID={this.props.partID} line={this.props.line}></Line>
                </div>
                <div className={styles.optionsContainer}>
                    <select className={styles.optionsContainerSelect} onChange={this.handleOptionSelected} style={{display: 'block'}} >
                        <option >
                        </option>
                        <option value="changeDirection" >
                                {directionOption}
                        </option>
                        <option value="copyChords" style={{display: 'block'}}>
                                copy chords
                        </option>
                        <option value="pasteChords" style={{display: 'none'}}>
                                paste chords
                        </option>
                        <option value="emptyChords" onClick={this.handleLineMenuExit} >
                                wipe chords
                        </option>
                        <option value="addLine" onClick={this.handleAddLineUnit} >
                                add line
                        </option>
                    </select>
                </div>
            </div>
            
        )
    }
}

function mapStateToProps({song}){
    return { song };
}

export default connect(mapStateToProps, {addLine, emptyChords, changeDirection})(LineChordUnit);