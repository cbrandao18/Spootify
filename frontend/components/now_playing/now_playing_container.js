import { connect } from 'react-redux';
import NowPlaying from './now_playing'
import { isPlaying, setSongQueue } from '../../actions/now_playing_actions'
import { fetchSong } from '../../actions/song_actions'

const mapStateToProps = (state) => {

    let currentSong = {};
    let currentSongAlbum = {};
    let currentArtist = {};
    if (state.ui.queue.length !== 0){
        let currentSongId = state.ui.queue[0];
        currentSong = state.entities.songs[currentSongId];
        currentSongAlbum = state.entities.albums[currentSong.album_id]
        currentArtist = state.entities.artists[currentSongAlbum.artist_id]
    }
    return {
        isPlaying: state.ui.isPlaying,
        queue: state.ui.queue,
        currentSong: currentSong,
        currentAlbum: currentSongAlbum,
        currentArtist: currentArtist
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        isPlaying: () => dispatch(isPlaying()),
        setSongQueue: (queue) => dispatch(setSongQueue(queue)),
        fetchSong: (id) => dispatch(fetchSong(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NowPlaying);