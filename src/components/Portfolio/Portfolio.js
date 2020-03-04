import React, { useState, useEffect } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Swipeable } from 'react-swipeable'
import PropTypes from 'prop-types'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Button from '../Button/Button'
import ProjectAsset from '../ProjectAsset/ProjectAsset'
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
          isFullScreen
          title
          projectAsset {
            _key
            _type
            video {
              _key
              asset {
                url
                source {
                  url
                }
              }
            }
            image {
              asset {
                url
                id
                fixed {
                  aspectRatio
                  width
                  height
                  src
                  srcSet
                  srcWebp
                  srcSetWebp
                }
                fluid {
                  aspectRatio
                  src
                  srcSet
                  srcWebp
                  srcSetWebp
                  sizes
                }
              }
            }
            photoLayout
          }
        }
      }
    }
  `)
  

  const [visible, setVisible] = useState(false)
  const [projects] = useState(data.allSanityProject.nodes.sort((a, b) => a.title.split('_')[0] - b.title.split('_')[0]))
  const [currentProject, setCurrentProject] = useState(data.allSanityProject.nodes.sort((a, b) => a.title.split('_')[0] - b.title.split('_')[0])[0])
  const [index, setIndex] = useState(0)
  
  
  const toggleLeft = () => {
    let newIndex = index - 1
    if (newIndex < 0) {
      newIndex = projects.length -1
    }
    const element = document.querySelector('.project-asset')
    element.classList.remove('visible')
    setTimeout(() => {
      setIndex(newIndex)
      setCurrentProject(projects[newIndex])
    },500)

  }

  const toggleRight = () => {
    let newIndex = index + 1
    if (newIndex >= projects.length ) {
      newIndex = 0
    }
    const element = document.querySelector('.project-asset')
    element.classList.remove('visible')
    setTimeout(() => {
      setIndex(newIndex)
      setCurrentProject(projects[newIndex])
    },500)
  }

  // useEffect(() => {
  //   if (projects.length) {
      
  //     const interval = setInterval(() => {
  //       if (index === projects.length - 1) {
          
  //         setIndex(0)
  //         setCurrentProject(projects[0])
  //         return
  //       } else {
  //         setCurrentProject(projects[index + 1])
  //         setIndex(index + 1)
  //       }
  //     }, 15000);
  //     return () => clearInterval(interval)
  //   }
  // }, [projects, index]);

  return (
    <main className={`portfolio${currentProject.isFullScreen ? ' fullscreen' : ''}`}>
      <SEO title='JAROD TABER' />
      
      <Header visible={visible === true ? true : false}/>
      
      
      
      <aside className='title'>
          <span className='title-container'>
            <h1 className='jarod' onClick={() => setVisible(false)}>Jarod Taber</h1>
            <button className='information' onClick={() => setVisible(!visible)}>Information</button>
          </span>
        </aside>
      
      
      
      <Swipeable onSwipedRight={toggleLeft} onSwipedLeft={toggleRight}>
        <Button className='left' onClick={toggleLeft}></Button>
        <ProjectAsset asset={{ isFullScreen: currentProject.isFullScreen , projectAsset: currentProject.projectAsset, alt: currentProject.title }} />
        <Button className='right' onClick={toggleRight}></Button>
      </Swipeable>
      
      <Footer isFullScreen={currentProject.isFullScreen} credits={currentProject.credits}/>
    </main>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
