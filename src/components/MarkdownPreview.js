import React from 'react';
import marked from 'marked';

class MarkdownPreviewer extends React.Component {
  constructor() {
    super();    
    
    // bind helpers i.e. allows use of 'this' for custom methods
    this.convertMarkdown = this.convertMarkdown.bind(this);
    // this.renderHTML = this.renderHTML.bind(this);
  }

  convertMarkdown() {
    return { __html: marked(this.props.markdown) };
  }

  render() {
    return (
      <div>
        <div dangerouslySetInnerHTML={this.convertMarkdown()} ></div>
      </div>
    )
  }
}

export default MarkdownPreviewer;
