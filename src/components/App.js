import React from 'react';
import MarkdownPreviewer from './MarkdownPreview';
import Footer from './Footer';

import md from '../data/markdown';

class App extends React.Component {
  constructor() {
    super();

    // bind helpers i.e. allows use of 'this' for custom methods
    this.updateUserMarkdown = this.updateUserMarkdown.bind(this);
    // this.renderHTML = this.renderHTML.bind(this);
    
    // initial state
    this.state = {
      markdown: md
    };
  }

  updateUserMarkdown(e) {
    // console.log(e.target.value);
    this.setState( {
      markdown: e.target.value
    })
  }
 
  render() {
    return (
      <div>
        <h1 className="header">Markdown Previewer</h1>
        <div className="wrapper">
          <textarea className="area-markdown" name="text" cols="40" rows="35" ref="inputMd" defaultValue={this.state.markdown} onChange={this.updateUserMarkdown}></textarea>
          <MarkdownPreviewer markdown={this.state.markdown}/>
        </div>
        <Footer />
      </div>
    )
  }
}

export default App;
