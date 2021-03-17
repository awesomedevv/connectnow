import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Switch, Route } from 'react-router'
import ReactNotification from 'react-notifications-component'
import { useDispatch } from 'react-redux'


import ContactPage from '../../pages/Contact'
import HomePage from '../../pages/Home'

export default function Main({ location }) {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return !loading && (
    <div className="main">
      <ReactNotification />
      
      <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/home" component={HomePage} />
          <Route path="*" component={HomePage} />
        </Switch>
      </div>
      
    </div>
  )
}

Main.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
}
