import React from 'react'
import { render } from 'react-dom'
import { Router, browserHistory } from 'react-router'

import 'dotenv/config'

// Main stylesheets
import './styles/index.css'

import router from './router'

// const { REACT_APP_ANALYTICS_ID } = process.env

/*
 * https://github.com/react-ga/react-ga
 * TODO --> create analytics page
 */

render(
  <Router
    history={browserHistory}
    routes={router}
  />,
  document.getElementById('root'),
)
