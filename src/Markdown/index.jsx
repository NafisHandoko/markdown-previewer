import React, {Component} from 'react';
import './index.css';
import Editor from './Editor/index';
import Preview from './Preview/index';

class Markdown extends Component{
  render(){
    return(
      <div className="markdown">
        <h1>Just a test</h1>
        <Editor />
        <Preview />
      </div>
    )
  }
}

export default Markdown;