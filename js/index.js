import request from 'superagent'
import imageTemplate from '../views/image.hbs'

const showImage = (err, res) => {
  const placeholder = document.getElementById('placeholder')
  placeholder.innerHTML = imageTemplate(res.body)
}

const getImage = () => {
  const NASA = 'https://api.nasa.gov/planetary/apod?api_key='
  const KEY = '2K4cczVOU884jfquXdOfq807bBXvEwhMmHs55987'
    request
      .get(`${NASA}${KEY}`)
      .end(showImage)
  }

document.addEventListener('DOMContentLoaded', getImage)

//2K4cczVOU884jfquXdOfq807bBXvEwhMmHs55987
