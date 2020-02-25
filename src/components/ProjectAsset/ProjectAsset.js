import React from 'react'
import Video from './Video'
import './ProjectAsset.scss'

const ProjectAsset = ({asset, onClick}) => {
    
    let projectAsset

    if (asset.projectAsset.image) {
        
        projectAsset = (
            <img src={asset.projectAsset.image.asset.url} alt={asset.alt}/>
        )
    } else {
        projectAsset = (
            <Video
                src={asset.projectAsset.video.asset.url}
                className={`video ${asset.isFullScreen ? 'fullscreen' : ''}`}
                onClick={onClick}
            />
        )
    }
    
    return (
        <section className={`project-asset${asset.isFullScreen ? ' fullscreen' : ''}`}>
            {projectAsset}
        </section>
    )
}
export default ProjectAsset