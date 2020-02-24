import React, { useState } from "react"
import PropTypes from "prop-types"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import SEO from '../seo'
import 'reset-css'
import './Portfolio.scss'


const Layout = ({ children }) => {
  const [visible, setVisible] = useState(false)
  const [projects] = useState(null)
  const [currentProject] = useState(null)

  return (
    <main className='portfolio'>
      <SEO title="JAROD TABER" />
      <Header visible={visible === true ? true : false}/>
        <aside className='title'>
          <span className='title-container'>
            <h1 className='jarod'>Jarod Taber</h1>
            <button className='information' onClick={() => setVisible(!visible)}>Information</button>
          </span>
        </aside>
      <Footer />
    </main>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
