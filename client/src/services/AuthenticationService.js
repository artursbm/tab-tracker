// It's used to hit the register page

import Api from '@/services/Api'

// exporting object that has a register method in it
export default {
  register (credentials) {
     // do a post request to the 'register' endpoint on a express server
     // and it is going to use the `credentials` data
    return Api().post('Register', credentials)
  }
}

// start real UI for this authentication system
// we can call this object or method from another file like:
// AuthenticationService.register({
//   email: 'johnsmith@gmail.com',
//   password: 'johnsmith'
// })
