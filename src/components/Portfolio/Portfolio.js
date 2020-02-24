import React, { useState } from "react"
import { useStaticQuery, graphql } from 'gatsby'
import PropTypes from "prop-types"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import SEO from '../seo'
import 'reset-css'
import './Portfolio.scss'


const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    {
      allSanityProject {
        nodes {
          credits {
            _key
            _type
            task
            name
          }
          isFullBleed
          title
          projectAsset {
            _key
            _type
            image {
              _key
              asset {
                source {
                  url
                }
              }
            }
            video {
              _key
              asset {
                url
                source {
                  url
                }
              }
            }
          }
        }
      }
    }
  `)
  

  const [visible, setVisible] = useState(false)
  const [projects] = useState(data.allSanityProject.nodes)
  const [currentProject] = useState(data.allSanityProject.nodes[0])

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
        
      <Footer isFullScreen={currentProject.isFullScreen} credits={currentProject.credits}/>
    </main>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
