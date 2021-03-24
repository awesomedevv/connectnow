
import axios from 'axios'

const API_URL = "https://public.connectnow.org.uk/"


export function Fetch(type, rootes, jsondata) {
  return new Promise((resolve, reject) => {

    switch (type) {
      case 'post':
        axios.post(
          API_URL + `${rootes}`,
          jsondata
        )
          .then(response => {
            resolve(response.data)
          })
          .catch(err => {
            reject(err)
          })
        break
      case 'get':
        axios.get(
          API_URL + `${rootes}`,
          jsondata
        )
          .then(response => {
            resolve(response.data)
          })
          .catch(err => {
            reject(err)
          })
        break
      case 'delete':
        axios.get(
          API_URL + `${rootes}`,
          jsondata
        )
          .then(response => {
            resolve(response.data)
          })
          .catch(err => {
            reject(err)
          })
        break

    }

  })
}