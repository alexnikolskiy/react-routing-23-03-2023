class Api {
  constructor({ baseUrl, apiKey }) {
    this._baseUrl = baseUrl
    this._apiKey = apiKey
  }

  search(query, count = 10) {
    return fetch(`${this._baseUrl}/search/photos?query=${query}&per_page=${count}`, {
      headers: {
        Authorization: `Client-ID ${this._apiKey}`
      }
    })
      .then(res => res.json())
  }
}

const api = new Api({
  baseUrl: 'https://api.unsplash.com',
  apiKey: '7co42daqfDN-Szpm5RC08OL-VKHF4iYGzdWqUdhr8i0'
})

export default api