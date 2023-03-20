import axios from 'axios'

function httpClient(_, inject = false) {
  const apiClient = axios.create({
    baseURL: '/',
    browserBaseURL: 'http://localhost:3000',
    responseType: 'json',
    headers: {
      Accept: 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    },
  })

  if (inject) inject('httpClient', apiClient)
  return apiClient
}

export default httpClient
