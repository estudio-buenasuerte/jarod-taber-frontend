import React from "react";

export default class Video extends React.Component {
  constructor(props) {
    super(props);
    this.videoRef = React.createRef();
    this.playVideoRef = this.playVideoRef.bind(this);
  }

  playVideoRef() {
    // This was required to get it to work for mobile iOS
    this.videoRef.current.autoplay = true;
    this.videoRef.current.focus();
    this.videoRef.current.play();
  }

  componentDidMount() {}

  componentDidUpdate() {
    if (this.props.isCurrent) {
      this.videoRef.current.autoplay = true;
      this.videoRef.current.focus();
      this.videoRef.current.play();
    } else {
      this.videoRef.current.pause();
    }
  }

  componentWillUnmount() {
    // this.pauseVideo();
  }

  render() {
    return (
      <video
        ref={this.videoRef}
        src={this.props.src}
        type="video/mp4"
        autoPlay={this.props.isCurrent}
        muted={true}
        loop={true}
        playsInline
        className={this.props.className}
      />
    );
  }
}
