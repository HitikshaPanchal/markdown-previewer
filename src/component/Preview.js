import React, { Component } from 'react';
import marked from 'marked';

marked.setOptions({
  breaks: true
});
const renderer = new marked.Renderer();

class Preview extends Component {
  render() {
    return (
      <div className='card preview-box'>
        <h3 className='card-header bg-dark text-white'>Previewer</h3>
        <div
          id='preview'
          className='card-body overflow-auto'
          dangerouslySetInnerHTML={{
            __html: marked(this.props.value, { renderer: renderer })
          }}
        />
      </div>
    );
  }
}

export default Preview;
