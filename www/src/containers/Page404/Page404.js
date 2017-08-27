import React from 'react'
import { Link } from 'react-router'

import './Page404.css'

const Page404 = () => (
  <div className="Page404">
    <p>404 - Page not found</p>
    <p>Get back to <Link to="/">homepage</Link>.</p>
  </div>
)

export default Page404
