import React, { Component } from 'react';
import axios from 'axios';

//SubComponents 
import ContentExplorer from './components/ContentExplorer';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      filedata: ''
    };
  }
  componentWillMount() {
      let filepath = "/home/baldvegeta/Desktop/hello/FileEntity.js";

      axios.post("http://localhost:4040/filedata",{ filepath })
          .then((res) => res.data)
          .then(filedata => this.setState(filedata));
  }
  render() {
    console.log(this.state.filedata);

    return (
      <div>
          <ContentExplorer filedata={this.state.filedata} />
      </div>
    );
  }
}

export default App;
