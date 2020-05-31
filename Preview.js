class Preview extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("[Preview] input:", this.props.input);
    return (
      <div className="md-preview-wrapper">
        <div className="md-preview-box">
          <div
            dangerouslySetInnerHTML={{
              __html: marked(this.props.input),
            }}
          />
        </div>
      </div>
    );
  }
}
