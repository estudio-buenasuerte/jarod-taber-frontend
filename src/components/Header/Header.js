import React, { useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import BlockContent from "@sanity/block-content-to-react";
import "./Header.scss";

const Header = props => {
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

  // return component
  return (
    <header className={`information ${props.visible ? "visible" : ""}`}>
      <BlockContent blocks={aboutText} serializers={serializers} />
    </header>
  );
};

export default Header;
