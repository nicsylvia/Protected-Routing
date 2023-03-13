import React from 'react'
import Homescreen from '../HomeScreen/Homescreen'
import Footer from '../LandingPage/Footer'
import Header from '../LandingPage/Header'

const AllRoutes = () => {

    let element = ([
        {
            path: "/",
            element: <Homescreen />
        }
    ])
  return (
    <>
        <Header />
        { element }
        <Footer />
    </>
  )
}

export default AllRoutes