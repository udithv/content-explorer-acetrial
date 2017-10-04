import React, { Component } from 'react';

import brace from 'brace';
import AceEditor from 'react-ace';

import 'brace/mode/javascript';
import 'brace/theme/github';
 
class ContentExplorer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: ''
        }
    }
   
    componentWillReceiveProps(nextProps){
        this.setState({ content: nextProps.filedata });
    }

    onChange(content){
        this.setState({ content });
    }

    render() {
        return (
            <div>
               <AceEditor
                    mode="javascript"
                    theme="github"
                    value={this.state.content}
                    onChange={this.onChange.bind(this)}
                    name="UNIQUE_ID_OF_DIV"
                    editorProps={{$blockScrolling: true}}
                />
            </div>
        );
    }
}

export default ContentExplorer;
