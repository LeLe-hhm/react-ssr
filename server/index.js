import React from 'react'
import { renderToString } from 'react-dom/server'
import express from 'express'
import { StaticRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import App from '../src/App'
import store from '../src/store/store'
console.log(store)
const app = express()
console.log(123, renderToString)
app.use(express.static('public'))
app.get('*', (req, res) => {
  let content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url}>{App}</StaticRouter>
    </Provider>
  )
  console.log('html', content)
  res.send(`
    <html>
      <head>
        <meta charset='utf-8'></meta>
        <title>react-ssr</title>
      </head>    
      <body>
        <div id='root'>${content}</div>
        <script src='./bundle.js'></script>
      </body>
    </html>
  `)
})

app.listen(9000, err => {
  console.log('listen start')
})
