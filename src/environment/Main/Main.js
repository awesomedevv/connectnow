import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Switch, Route } from 'react-router'
import ReactNotification from 'react-notifications-component'
import { useDispatch } from 'react-redux'

import '../../styles/index.scss'


import HomePage from '../../pages/Home'
import ContactPage from '../../pages/Contact'

import Header from '../../components/Header'

export default function Main({ location }) {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <section className="main">
      <section className="page container">
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/home" component={HomePage} />
        </Switch>
      </section>
    </section>
  )
}


