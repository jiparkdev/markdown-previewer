class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
    };
    this.handleChange = this.handleChange.bind(this);
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
