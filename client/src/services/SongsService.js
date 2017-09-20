// this will assist the Api to hit the endpoint /songs
import Api from '@/services/Api'

// export an object that has such methods:
// we will have an object that allows to call a songs method,
// which will hit the /songs endpoint and do what is suposed to do.
// this method will get the songs from the DB, which means it will make a get request
// to the songs endpoint on the Express server and then the endpoint will respond with the songs
export default {
  index () {
    return Api().get('songs')
  },
  post (song) {
    // post request to songs endpoint, passing a song as data
    return Api().post('songs', song)
  },
  show (songId) {
    return Api().get(`songs/${songId}`)
  }
}

// index() calls an endpoint like /songs,
// show() will call an endpoint like /songs/:idSong
// the name of the method is just to keep the consistance that helps on recognizing it

