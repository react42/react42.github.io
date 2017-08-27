import React from 'react'
import { Helmet } from 'react-helmet'

const Head = () => {
  const pageTitle = 'Home' // TODO --> make pageTitle dynamic with router

  return (
    <Helmet>
      <title>React42 | {pageTitle}</title>
    </Helmet>
  )
}

export default Head
