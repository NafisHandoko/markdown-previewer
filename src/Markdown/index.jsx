import React, {Component} from 'react';
import marked from 'marked';
import { ScrollSync, ScrollSyncPane } from 'react-scroll-sync';
import './index.css';
import Editor from './Editor/index';
import Preview from './Preview/index';

const defState = "# Welcome to my React Markdown Previewer!\n\n## This is a sub-heading...\n### And here's some other cool stuff:\n\nHeres some code, `<div></div>`, between 2 backticks.\n\n```\n// this is multi-line code:\n\nfunction anotherExample(firstLine, lastLine) {\n  if (firstLine == '```' && lastLine == '```') {\n    return multiLineCode;\n  }\n}\n```\n\nYou can also make text **bold**... whoa!\nOr _italic_.\nOr... wait for it... **_both!_**\nAnd feel free to go crazy ~~crossing stuff out~~.\n\nThere's also [links](https://www.freecodecamp.org), and\n> Block Quotes!\n\nAnd if you want to get really crazy, even tables:\n\nWild Header | Crazy Header | Another Header?\n------------ | ------------- | -------------\nYour content can | be here, and it | can be here....\nAnd here. | Okay. | I think we get it.\n\n- And of course there are lists.\n  - Some are bulleted.\n     - With different indentation levels.\n        - That look like this.\n\n\n1. And there are numbered lists too.\n1. Use just 1s if you want!\n1. And last but not least, let's not forget embedded images:\n\n![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)\n";

class Markdown extends Component{
  constructor(props){
    super(props)
    this.state = {
      input: defState,
      output: defState
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
          <div className="editor">
            <h3>Editor</h3>
            <ScrollSyncPane>
              <Editor input={this.state.input} handleChange={this.handleChange}/>
            </ScrollSyncPane>
          </div>
          <div className="preview">
            <h3>Preview</h3>
            <div className="box">
              <ScrollSyncPane>
                <Preview output={this.state.output}/>
              </ScrollSyncPane>
            </div>
          </div>
        </div>
      </ScrollSync>
    )
  }
}

export default Markdown;