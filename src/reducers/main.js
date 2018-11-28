import { combineReducers } from 'redux';
import changeVideo from './currentVideo.js';
import changeVideoList from './videoList.js';

var rootReducer = () => {
  combineReducers({
    changeVideo,
    changeVideoList
  })
};

//TODO: define the root reducer for this app

//HINT: you'll need to combine the other two reducers in this
//  app into a single reducer using the 'combineReducers' method
//  listed above.

export default rootReducer;
