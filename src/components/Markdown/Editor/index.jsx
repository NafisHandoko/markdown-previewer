import React, {Component} from 'react';
import './index.css';

class Editor extends Component{
  render(){
    return(
      <textarea id="editor" onChange={this.props.handleChange} value={this.props.input}>
      </textarea>
    )
  }
}

export default Editor;