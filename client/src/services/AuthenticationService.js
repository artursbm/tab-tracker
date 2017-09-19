// this will assist the Api to hit the endpoint /register and authenticate the user login
import Api from '@/services/Api'

// export an object that has such methods:
// we will have an object that allows to call a register method,
// which will hit the /register endpoint and do what is suposed to do with the credentials provided.
// this method will pass the email and passwd (credentials) to the post method, which will make a post request
// to the register endpoint on the Express server and then the endpoint will use the credentials
export default {
  register (credentials) {
    return Api().post('register', credentials)
  },
  login (credentials) {
    // criando agora um post request para um endpoint chamado login.
    // Devo defini-lo em Api, e daí por diante, tipo um efeito cascata
    return Api().post('login', credentials)
  }
}

