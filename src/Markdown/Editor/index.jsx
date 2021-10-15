import React, {Component} from 'react';
import './index.css';

class Editor extends Component{
  render(){
    return(
      <textarea id="editor">
        this is editor component
      </textarea>
    )
  }
}

export default Editor;