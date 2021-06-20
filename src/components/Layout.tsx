import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import 'normalize.css'
import '../assets/css/main.css'

const Layout = (props: React.PropsWithChildren<any>) => {
  return (
    <>
      <Navbar />
      {props.children}
      <Footer />
    </>
  )
}

export default Layout
