import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchSongs } from '../../actions';
import styles from './css/songSearchBar.module.css';

class SongSearchBar extends Component {
    handleSearchBarValueChange = (e) => {
        this.props.searchSongs(e.target.value);
    }

    render(){
        return (
            <div className={styles.container}>
                <h5 className={styles.searchText} for="search_bar">Search: </h5>
                <div className="s6">
                    <input 
                        onChange={this.handleSearchBarValueChange} 
                        placeholder="enter the name of your song to filter list" 
                        type="text" 
                        class="validate" 
                    />
                </div>
            </div>
        )
    }
}

export default connect(null, {searchSongs})(SongSearchBar);