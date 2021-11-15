import React, {Component} from 'react';
import marked from 'marked';
import { ScrollSync, ScrollSyncPane } from 'react-scroll-sync';
import './index.css';
import Editor from './Editor/index';
import Preview from './Preview/index';
import {connect} from 'react-redux';
import {mdEdit} from '../../store/actions/mdAction';

class Markdown extends Component{
  constructor(props){
    super(props)
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    this.props.editData(e.target.value);
  }

  render(){
    return(
      <ScrollSync>
        <div className="markdown">
          <div className="editor">
            <h3>Editor</h3>
            <ScrollSyncPane>
              <Editor input={this.props.data} handleChange={this.handleChange}/>
            </ScrollSyncPane>
          </div>
          <div className="preview">
            <h3>Preview</h3>
            <div className="box">
              <ScrollSyncPane>
                <Preview output={this.props.data}/>
              </ScrollSyncPane>
            </div>
          </div>
        </div>
      </ScrollSync>
    )
  }
}

const mapStateToProps = state => {
  return {
    data: state.mdReducer.data
  }
}

const mapDispatchToProps = dispatch => {
  return {
    editData: (newData) => {
      dispatch(mdEdit(newData))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Markdown);