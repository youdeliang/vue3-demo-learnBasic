import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://www.fastmock.site/mock/ae8e9031947a302fed5f92425995aa19/jd',
  timeout: 10000
})

export const post = (url, data = {}) => {
  return new Promise((resolve, reject) => {
    instance.post(url, data, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((respose) => {
      resolve(respose.data)
    }, err => reject(err))
  })
}

export const get = (url, params = {}) => {
  return new Promise((resolve, reject) => {
    instance(url, { params }).then((respose) => {
      resolve(respose.data)
    }, err => reject(err))
  })
}
