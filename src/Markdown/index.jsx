import React, {Component} from 'react';
import marked from 'marked';
import './index.css';
import Editor from './Editor/index';
import Preview from './Preview/index';

class Markdown extends Component{
  constructor(props){
    super(props)
    this.state = {
      input: '',
      output: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event){
    this.setState({
      input: event.target.value,
      output: event.target.value
    })
  }
  render(){
    return(
      <div className="markdown">
        <Editor input={this.state.input} handleChange={this.handleChange}/>
        <Preview output={this.state.output}/>
      </div>
    )
  }
}

export default Markdown;