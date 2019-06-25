export const fetchPlaylists = () => {
    return $.ajax({
        method: 'GET',
        url: '/api/playlists'
    })
}

export const fetchPlaylist = (id) => {
    return $.ajax({
        method: 'GET',
        url: `/api/playlists/${id}`
    })
}

export const createPlaylist = (playlist) => {
    return $.ajax({
        method: 'POST',
        url: '/api/playlists',
        data: {playlist}
    })
}

export const removePlaylist = (playlistId) => {
    return $.ajax({
        method: 'DELETE',
        url: `/api/playlists/${playlistId}`,
        data: playlistId
    })
}