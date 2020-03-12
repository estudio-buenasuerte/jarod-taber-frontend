import React, { useState, useEffect } from "react";
import { useStaticQuery, graphql } from "gatsby";
import BlockContent from "@sanity/block-content-to-react";
import Footer from "../Footer/Footer";
import "./Header.scss";

const Header = ({ visible, onClick }) => {
  // get the data
  const data = useStaticQuery(graphql`
    {
      allSanitySiteSettings {
        edges {
          node {
            _rawAboutBio
          }
        }
      }
    }
  `);

  // define serializer
  const serializers = {
    marks: {
      link: ({ mark, children }) => {
        const { href } = mark;
        return (
          <a href={href} target="_blank" rel="noopener noreferrer">
            {children}
          </a>
        );
      }
    }
  };

  // header state
  const [aboutText] = useState(
    data.allSanitySiteSettings.edges[0].node._rawAboutBio
  );

  const [headerVisible, setVisible] = useState(visible);

  useEffect(() => {
    setVisible(visible);
    return () => {
      setVisible(false);
    };
  }, [visible]);

  // return component
  return (
    <header
      className={`information ${headerVisible ? "visible" : ""}`}
      onClick={onClick}
    >
      <BlockContent blocks={aboutText} serializers={serializers} />
      <Footer
        infoCredits={[
          {
            task: "Design",
            name: "ADAM RIDGEWAY",
            site: "http://adamridgeway.com/"
          },
          {
            task: "Development",
            name: "LUCAS VOCOS",
            site: "https://www.lucasvocos.com"
          }
        ]}
      />
    </header>
  );
};

export default Header;
