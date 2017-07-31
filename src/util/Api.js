import fetch from 'isomorphic-fetch'

const API_BASE = 'https://jsonplaceholder.typicode.com'

export const callApi = (path, query) =>
  fetch(`${API_BASE}${path}`)
  .then((res) => res.json())
  .catch((err) => console.log(err.message))
