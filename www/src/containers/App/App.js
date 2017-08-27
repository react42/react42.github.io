import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'
import PropTypes from 'prop-types'

import { Head } from '../../components'

import './App.css'

class App extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    location: PropTypes.object.isRequired,
    routes: PropTypes.arrayOf(PropTypes.object).isRequired,
  }

  state = { width: 0 }

  componentDidMount () {
    this._updateWindowWidth()
    window.addEventListener('resize', this.updateWindowWidth)
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.updateWindowWidth)
  }

  /*
   * Update state width each time user resize the browser
   * Usefull for responsive purposes
   */
  _updateWindowWidth = () =>
    this.setState({ width: findDOMNode(this._app).getBoundingClientRect().width })

  render () {
    const { children } = this.props

    return (
      <div
        className="App"
        ref={c => this._app = c}
      >
        <Head />

        {children}
      </div>
    )
  }
}

export default App
