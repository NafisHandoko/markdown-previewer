import React, {Component} from 'react';
import './index.css';

class Preview extends Component{
  render(){
    return(
      <div id="preview">
        {this.props.output}
      </div>
    )
  }
}

export default Preview;