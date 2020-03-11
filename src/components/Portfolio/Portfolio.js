import React, { useState, useEffect } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Swipeable } from "react-swipeable";
import PropTypes from "prop-types";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Button from "../Button/Button";
import ProjectAsset from "../ProjectAsset/ProjectAsset";
import SEO from "../seo";
import "reset-css";
import "./Portfolio.scss";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    {
      allSanitySiteSettings {
        nodes {
          projectOrder {
            credits {
              _key
              name
              _type
              task
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
                  childImageSharp {
                    id
                  }
                }
              }
              image {
                _key
                _type
                asset {
                  fixed {
                    base64
                    aspectRatio
                    width
                    height
                    src
                    srcSet
                    srcWebp
                    srcSetWebp
                  }
                  fluid {
                    base64
                    aspectRatio
                    src
                    srcSet
                    srcWebp
                    srcSetWebp
                    sizes
                  }
                  url
                  id
                }
              }
              photoLayout
            }
          }
        }
      }
    }
  `);
  const [visible, setVisible] = useState(false);

  const [projects] = useState(data.allSanitySiteSettings.nodes[0].projectOrder);

  const [currentProject, setCurrentProject] = useState(
    data.allSanitySiteSettings.nodes[0].projectOrder[0]
  );

  const [index, setIndex] = useState(0);

  const toggleLeft = () => {
    let newIndex = index - 1;
    if (newIndex < 0) {
      newIndex = projects.length - 1;
    }
    const element = document.querySelector(".project-asset");
    element.classList.remove("visible");
    setIndex(newIndex);
    setCurrentProject(projects[newIndex]);
  };

  const toggleRight = () => {
    let newIndex = index + 1;
    if (newIndex >= projects.length) {
      newIndex = 0;
    }
    const element = document.querySelector(".project-asset");
    element.classList.remove("visible");
    setIndex(newIndex);
    setCurrentProject(projects[newIndex]);
  };

  const handleClickEvent = e => {
    if (e.target.nodeName !== "P") {
      setVisible(false);
    }
  };

  useEffect(() => {
    if (projects.length) {
      const interval = setInterval(() => {
        if (index === projects.length - 1) {
          setIndex(0);
          setCurrentProject(projects[0]);
          return;
        } else {
          setCurrentProject(projects[index + 1]);
          setIndex(index + 1);
        }
      }, 15000);
      return () => clearInterval(interval);
    }
  }, [projects, index]);

  return (
    <main
      className={`portfolio${currentProject.isFullScreen ? " fullscreen" : ""}`}
      id={visible ? "information" : ""}
    >
      <SEO title="JAROD TABER" />

      <Header visible={visible} onClick={handleClickEvent} />

      <aside className="title">
        <span className="title-container">
          <h1 className="jarod" onClick={() => setVisible(false)}>
            Jarod Taber
          </h1>
          <button className="information" onClick={() => setVisible(!visible)}>
            Information
          </button>
        </span>
      </aside>

      <Swipeable onSwipedRight={toggleLeft} onSwipedLeft={toggleRight}>
        <Button className="left" onClick={toggleLeft}>
          <div className="circle" />
        </Button>

        {projects.map(project => {
          return (
            <ProjectAsset
              asset={{
                isFullScreen: project.isFullScreen,
                projectAsset: project.projectAsset,
                alt: project.title,
                isCurrent: project === currentProject
              }}
              key={project.title}
            />
          );
        })}

        <Button className="right" onClick={toggleRight}>
          <div className="circle" />
        </Button>
      </Swipeable>
      <Footer
        isFullScreen={currentProject.isFullScreen}
        credits={currentProject.credits}
      />
    </main>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
