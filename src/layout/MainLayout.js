import React from 'react'
import Footer from '../component/Footer'
import Header from '../component/Header'

export const MainLayout = (children) => {
    // const { isAuthenticated, children } = props
  return (
    <React.Fragment>
        <Header/>
        {children}
        <Footer/>
    </React.Fragment>
  )
}

