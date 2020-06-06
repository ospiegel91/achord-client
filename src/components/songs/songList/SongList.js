import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSongs } from '../../../actions';
import styles from './css/songList.module.css';

class SongList extends Component {
    componentDidMount(){
        this.props.fetchSongs();
    }
    renderSongs(){
        return this.props.songs.map(song=>{
            return (
                <div className="card darken-1" key={song._id}>
                    <div className="card-content">
                        <span className="card-title">{song.name}</span>
                        <p className="right">
                            Last Saved On: {new Date(song.dateLastSaved).toLocaleDateString()}
                        </p>
                    </div>
                </div>
            )
        })
    }
    render(){
        return (
            <div className={styles.songsContainer}>
                {this.renderSongs()}
            </div>
        )
    }
}

function mapStateToProps({songs}){
    return { songs };
}

export default connect(mapStateToProps, {fetchSongs})(SongList);