import React from 'react'
import Video from './Video'
import './ProjectAsset.scss'

const ProjectAsset = ({asset, onClick}) => {
    
    let projectAsset

    if (asset.projectAsset.image.length > 0) {
        projectAsset = (
            <aside className='img-assets'>
                {asset.projectAsset.image.map(img => {
                    return <div key={img.asset.id} className={`img-asset${img === asset.projectAsset.image[0] ? ' mobile' : ''}`}><img src={img.asset.url}  alt={asset.alt} /></div>
                })}
            </aside>
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