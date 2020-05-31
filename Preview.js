class Preview extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="md-preview-box">
        <div className="md-preview-title">Markdown Preview</div>
        <div
          className="md-preview"
          dangerouslySetInnerHTML={{
            __html: marked(this.props.input),
          }}
        />
      </div>
    );
  }
}
