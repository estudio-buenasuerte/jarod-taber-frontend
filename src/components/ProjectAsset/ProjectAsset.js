import React, { useState, useEffect } from "react";
import Video from "./Video";
import Img from "gatsby-image";
import "./ProjectAsset.scss";

const ProjectAsset = ({ asset }) => {
  let projectAsset;

  if (asset.projectAsset.image.length > 0) {
    projectAsset = (
      <aside
        className="img-assets"
        id={asset.projectAsset.photoLayout}
        style={{
          backgroundImage: asset.isFullScreen
            ? `url(${asset.projectAsset.image[0].asset.url})`
            : null
        }}
      >
        {asset.projectAsset.image.map(img => {
          return (
            <div
              key={img.asset.id}
              className={`img-asset${
                img === asset.projectAsset.image[0] ? " mobile" : ""
              }${asset.isFullScreen ? " fullscreen" : ""}`}
            >
              <Img fluid={img.asset.fluid} alt={asset.alt} />
            </div>
          );
        })}
      </aside>
    );
  } else {
    projectAsset = (
      <Video
        src={asset.projectAsset.video.asset.url}
        className={`video ${asset.isFullScreen ? "fullscreen" : ""}`}
      />
    );
  }

  return (
    <>
      <section
        className={`project-asset${asset.isFullScreen ? " fullscreen" : ""}${
          asset.isCurrent ? "  current" : ""
        }`}
      >
        {projectAsset}
      </section>
    </>
  );
};
export default ProjectAsset;
