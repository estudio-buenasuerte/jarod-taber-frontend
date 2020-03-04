import React from 'react'

export default class Video extends React.Component {
    constructor(props) {
        super(props)
        this.videoRef = React.createRef()
        this.playVideoRef = this.playVideoRef.bind(this)
    }

    playVideoRef() {
        // Explicitly focus the text input using the raw DOM API
        // Note: we're accessing 'current' to get the DOM node
        // This was required to get it to work for mobile iOS
        this.videoRef.current.autoplay = true
        this.videoRef.current.focus()
        this.videoRef.current.play()
    }

    componentDidMount() {
    };

    componentWillUnmount() {
        // this.pauseVideo();
    };

    render() {
        return (
            <video
                ref={this.videoRef}
                src={this.props.src}
                type='video/mp4'
                autoPlay={true}
                muted={true}
                loop={true}
                playsInline
                className={this.props.className}
                onLoadedData={this.playVideoRef}
            />
        )
    };
}
