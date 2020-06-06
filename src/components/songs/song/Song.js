import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSong } from '../../../actions';
import Part from './components/part/Part';
import styles from './css/song.module.css';

class Song extends Component {
    state = {
        timePerPart: 45,
        partDisplayArr: [0,1]
    }
    componentDidMount(){
        const songID = this.props.match.params.id;
        this.props.fetchSong(songID);
    }

    renderSongParts(){
        const partDisplayArr = this.state.partDisplayArr;
        if(this.props.song.parts){
            return this.props.song.parts.map((part, i) => 
            (partDisplayArr[0] == i || partDisplayArr[1] == i) ? 
            <Part display={true} part={part} key={i}></Part> :  
            <Part display={false} part={part} key={i}></Part> );
        }
        return;
    }

    setDisplayState = () =>{
        console.log('visited')
        this.setState({
            partDisplayArr: [this.state.partDisplayArr[0]+1,
                            this.state.partDisplayArr[1]+1]
        })
    }

    handlePlaySong = () => {
            console.log('launched')
            setInterval(this.setDisplayState, this.state.timePerPart*1000);
    }

    setTimer = (e) => {
        return this.setState({
            timePerPart: e.target.value
        })
    }

    render(){
        const {song} = this.props;
        return (
            <div className={styles.songContainer} dir={song.direction}>
                <div className={styles.toolBarContainer}>
                    <h4>{song.name}</h4>
                    <div>
                        <h7>commonly used symbols</h7>
                        <div className={styles.symbolContainer}>
                            <button>ø</button>
                            <button>o</button>
                            <button>Δ</button>
                            <button>#</button>
                            <button><sup>b</sup></button>
                        </div>
                    </div>
                    <fieldset>
                        <label for="timer">Time per part:</label>
                        <input 
                            name="timer" 
                            max="100" 
                            min="5" 
                            step="1"
                            onChange={this.setTimer} 
                            type="range" defaultValue={this.state.timePerPart}></input>
                        <em>{this.state.timePerPart} seconds</em>
                    </fieldset>
                    <button style={{margin: "auto 1%",}} onClick={this.handlePlaySong} className="green white-text btn-flat">
                        Play Song
                        <i className="material-icons white-text right">play_circle_filled</i>
                    </button>
                </div>
                <div classNAme="container">
                    <div className="row">
                        {this.renderSongParts()}
                    </div>
                </div>

            </div>
        )
    }
}

function mapStateToProps({song}){
    return { song };
}

export default connect(mapStateToProps, {fetchSong})(Song);