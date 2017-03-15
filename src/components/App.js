import React from 'react';

import md from '../data/markdown';

class App extends React.Component {
  constructor() {
    super();

    // bind helpers i.e. allows use of 'this' for custom methods
    this.updateMdPreviewer = this.updateMdPreviewer.bind(this);
    
    // initial state
    this.state = {
      markdown: md
    };
  }

  updateMdPreviewer(e) {
    console.log(e.target.value);
    this.setState( {
      md: e.target.value
    })
  }
    
  render() {
    return (
      <div>
        <h1>Markdown Previewer</h1>
        <textarea name="text" cols="40" rows="40" ref="inputMd" defaultValue={this.state.markdown} onChange={this.updateMdPreviewer}></textarea>
      </div>
    )
  }
}

export default App;
