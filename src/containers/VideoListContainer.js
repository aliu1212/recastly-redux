import { connect } from 'react-redux';
import VideoList from './../components/VideoList.js';
import changeVideo from './../actions/currentVideo.js';

let mapStateToProps = (state) => {
  return {
    // videos: state.handleVideoListEntryTitleClick,
    videos: state.videoList
  }
}

let mapDispatchToProps = (dispatch) => {
  return {handleVideoListEntryTitleClick: value => dispatch(changeVideo(value))}
}

var VideoListContainer = connect(mapStateToProps, mapDispatchToProps)(VideoList);

//'should have a prop called handleVideoListEntryTitleClick which dispatches changeVideo'
//TODO: define a VideoListContainer component which will hook up your action
// dispatchers with your VideoList component props.

export default VideoListContainer;
