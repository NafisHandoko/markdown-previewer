import React, {Component} from 'react';
import './index.css';
import marked from 'marked';

class Preview extends Component{
  render(){
    return(
      <div id="preview" dangerouslySetInnerHTML={{ __html: marked(this.props.output,{sanitize: true,breaks: true}) }}>
      </div>
    )
  }
}

export default Preview;