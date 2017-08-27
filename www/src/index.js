import React from 'react'
import { render } from 'react-dom'
import { Router, browserHistory } from 'react-router'
import Analytics from 'react-ga'

import 'dotenv/config'

// Main stylesheets
import './styles/index.css'

import router from './router'

const { REACT_APP_ANALYTICS_ID } = process.env

/*
 * https://github.com/react-ga/react-ga
 * TODO --> create analytics page
 */
Analytics.initialize(REACT_APP_ANALYTICS_ID)

const { pathname, search } = window.location
const page = pathname + search

const pageView = () => {
  Analytics.set({ page })
  Analytics.pageview(page)
}

render(
  <Router
    history={browserHistory}
    routes={router}
    onUpdate={pageView} // On location change, send event to Google-Analytics
  />,
  document.getElementById('root'),
)
