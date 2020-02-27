import React, {useState, useEffect} from 'react'
import Video from './Video'
import Img from "gatsby-image"
// import { Keyframes, Frame } from 'react-keyframes'
import './ProjectAsset.scss'

const ProjectAsset = ({asset, onClick}) => {
    const [loaded, setLoaded] = useState(false)

    let projectAsset

    useEffect(() => {
            const loadInterval = setTimeout(() => {
                setLoaded(true)
            }, 250);
            const fadeInterval = setTimeout(() => {
                setLoaded(false)
            }, 9500);

            return () => {
                setLoaded(false)
                clearTimeout(loadInterval)
                clearTimeout(fadeInterval)
            }
    }, [asset.alt])

    if (asset.projectAsset.image.length > 0) {
        projectAsset = (
            <aside className='img-assets'>
                {asset.projectAsset.image.map(img => {
                    return <div key={img.asset.id} className={`img-asset${img === asset.projectAsset.image[0] ? ' mobile' : ''}`}><Img fluid={img.asset.fluid}  alt={asset.alt} /></div>
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
            <section className={`project-asset${asset.isFullScreen ? ' fullscreen' : ''}${loaded ? ' visible' : ''}`}>
                {projectAsset}
            </section>
    )
}
export default ProjectAsset