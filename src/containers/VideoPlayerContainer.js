import { connect } from 'react-redux';
import VideoPlayer from '../components/VideoPlayer.js';

let mapStateToProps = (state) => {
  return {video: state.currentVideo}
}
let mapDispatchToProps = (dispatch) => {
  return {}
}

var VideoPlayerContainer = connect(mapStateToProps, mapDispatchToProps)(VideoPlayer);

// should have a prop called video connected to the currentVideo in the store'

//TODO: define a VideoPlayerContainer component which will hook up your action
//dispatchers with your VideoPlayer component props.

export default VideoPlayerContainer;
