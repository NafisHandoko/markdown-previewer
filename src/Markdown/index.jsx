import React, {Component} from 'react';
import marked from 'marked';
import { ScrollSync, ScrollSyncPane } from 'react-scroll-sync';
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
      <ScrollSync>
        <div className="markdown">
          <ScrollSyncPane>
            <Editor input={this.state.input} handleChange={this.handleChange}/>
          </ScrollSyncPane>
          <ScrollSyncPane>
            <Preview output={this.state.output}/>
          </ScrollSyncPane>
        </div>
      </ScrollSync>
    )
  }
}

export default Markdown;