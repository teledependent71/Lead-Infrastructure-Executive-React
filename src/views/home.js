import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Lead Infrastructure Executive</title>
        <meta property="og:title" content="Lead Infrastructure Executive" />
      </Helmet>
    </div>
  )
}

export default Home
