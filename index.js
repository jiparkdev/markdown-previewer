class Editor extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="md-editor-box">
        <div className="md-editor-label">Markdown Editor</div>
        <textarea
          className="md-textarea"
          id="editor"
          name="md-editor"
          onChange={this.props.handleChange}
          value={this.props.input}
        ></textarea>
      </div>
    );
  }
}

class Preview extends React.Component {
  constructor(props) {
    super(props);
    marked.setOptions({
      gfm: true,
      breaks: true,
    });
  }

  render() {
    return (
      <div className="md-preview-box">
        <div className="md-preview-title">Markdown Preview</div>
        <div
          className="md-preview"
          id="preview"
          dangerouslySetInnerHTML={{
            __html: marked(this.props.input),
          }}
        />
      </div>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    let defaultMark = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:
  
Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
  
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | ------------- 
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)
`;
    this.setState({
      inputValue: defaultMark,
    });
  }

  handleChange(event) {
    this.setState({
      inputValue: event.target.value,
    });
  }

  render() {
    return (
      <div class="md-wrapper">
        <Editor
          input={this.state.inputValue}
          handleChange={this.handleChange}
        />
        <Preview input={this.state.inputValue} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
