// API that will set up a connector to hit back end server;

// importo a biblioteca axios
import axios from 'axios'
// e retorno um conector axios a partir de Api.js
export default() => {
  return axios.create({
    // axios object that points to back end on port 8081
    baseURL: `http://localhost:8081/`
  })
}
