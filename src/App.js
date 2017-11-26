import _ from 'lodash';
import React, { Component } from 'react';
import UTubeSearch from 'youtube-search';
import VideoList from './components/VideoList';
import VideoDetails from './components/VideoDetails';
//import SearchUTube from './components/SearchUTube';
//import { Navbar, Jumbotron, Button } from 'react-bootstrap';
import './App.css';

const opts = {
  maxResults: 10,
  key: 'AIzaSyBmMgMWRqqIFHKAtBf1JltPWbQPZXAhXek'
}

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      searchTerm: '',
      videos: [],
      activeVideo: []
    }

    this.videoSearch(this.state.searchTerm);
  }//constructor

  videoSearch = (searchTerm) => {
    UTubeSearch(searchTerm, opts, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log(data);
        this.setState({
          searchTerm: searchTerm,
          videos: data,
          activeVideo: data[1]
        })
        console.log('activeVideo ',this.state.activeVideo);
      }
    });
  }

  render() {
    const videoSearch = _.debounce((searchTerm) => { this.videoSearch(searchTerm) }, 500);
    return (
      <div>
        <h1 id="main-header">Hello, Welcome to my UTune!</h1>
        <div className="row">
          <div className="form-group col-md-offset-3 col-md-6">
                <input
                  type='text'
                  className="form-control"
                  placeholder='search videos'
                  autoFocus
                  onChange={(e) => videoSearch(e.target.value)} />
          </div>
        </div><hr />
        <div className="row">
          <div className="col-md-8 pull-left">
            <VideoDetails activeVideo={this.state.activeVideo}/>
          </div>
          <div className="col-md-4 pull-right">
            <VideoList 
              videos={this.state.videos}
              makeActive={(video) => this.setState({activeVideo: video})} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
