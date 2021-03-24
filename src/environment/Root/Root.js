import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'

import Main from '../Main'

export default function Root({ history, store }) {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Main />
      </ConnectedRouter>
    </Provider>
  )
}

