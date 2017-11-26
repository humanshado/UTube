import _ from 'lodash';
import React, { Component } from 'react';
import UTubeSearch from 'youtube-search';
import VideoList from './components/VideoList';
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
      videos: [],
      searchTerm: 'nigeria'
    }

    this.videoSearch(this.state.searchTerm, opts);
  }//constructor

  videoSearch = (searchTerm) => {
    UTubeSearch(searchTerm, opts, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log(data);
        this.setState({
          searchTerm: searchTerm,
          videos: data
        })
      }
    });
  }

  render() {
    const debouncedSearch = _.debounce((searchTerm) => { this.videoSearch(searchTerm) }, 400);
    return (
      <div>
        <h1 id="main-header">Hello, welcome to my UTube!</h1>
        <div className="row">
          <div className="form-group col-md-offset-3 col-md-6">
            <input
              type='text'
              className="form-control"
              value={this.state.searchTerm}
              placeholder='search videos'
              autoFocus
              onChange={(e) => debouncedSearch(e.target.value)}
            />
          </div>
        </div><hr />
        <div className="row">
          <div className="col-md-8 pull-left">
            <h3>Video Details coming soon...</h3>
          </div>
          <div className="col-md-4 pull-right">
            <VideoList videos={this.state.videos} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
