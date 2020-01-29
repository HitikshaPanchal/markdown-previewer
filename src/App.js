import React, { Component } from 'react';
import './App.css';
import Preview from './component/Preview';

const placeholder = `# Welcome!
---
## A sub-heading...
***
### And other cool stuff:
___ 
Heres code, \`<div></div>\`.

\`\`\`
// A multi-line code:

function anExample(firstLine, lastLine) {
  if (firstLine === '\`\`\`' && lastLine === '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
  
You can also make text **bold**... whoa!
Or _italic_
Or... together... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

Also [links](https://reactjs.org/), and
> Block Quotes!

Even tables:

Tables | Are | Cool 
:--- | :---: | ---: 
col 3 | aligned | less
col 2 | center | and
col 1 | neat | pretty

- And of course, there are lists
  - Some are bulleted
     - With different indentation levels

1. And there are numbered lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks
* And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://pngimage.net/wp-content/uploads/2018/06/react-logo-png-6.png)
`;
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: placeholder
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      value: e.target.value
    });
  }

  render() {
    return (
      <div className='container-fluid'>
        <div className='row justify-content-around pt-5'>
          <div className='card col col-sm-5 border-dark editor-box p-0'>
            <h3 className='card-header bg-dark text-white'>Editor</h3>
            <div className='card-body p-0 ml-3 mt-3'>
              <textarea
                id='editor'
                onChange={this.handleChange}
                defaultValue={this.state.value}
              ></textarea>
            </div>
          </div>
          <div className='col col-sm-5 p-0'>
            <Preview value={this.state.value} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
