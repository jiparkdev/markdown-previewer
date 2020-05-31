class Editor extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="md-editor-wrapper">
        <div className="md-editor-box">
          <label for="md-editor" className="md-editor-label">
            Markdown Editor
          </label>
          <textarea
            className="md-textarea"
            id="editor"
            name="md-editor"
            onChange={this.props.handleChange}
            value={this.props.input}
          ></textarea>
        </div>
      </div>
    );
  }
}
