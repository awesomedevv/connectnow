import React, { useEffect } from 'react'
import { render } from 'react-dom'
import './index.css'

import reportWebVitals from './reportWebVitals'

import history from './history'
import store from './store'

import Root from './environment/Root'

render(
  <Root history={history} store={store} />,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
