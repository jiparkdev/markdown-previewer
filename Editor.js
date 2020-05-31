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
