import React from "react";

export class Home extends React.Component {
  constructor(props) {
    super();
    this.state = {
      text: props.text
    }
  }

  onChangeText() {
    this.props.onChangeText(this.state.text);
  }

  onHandleChangeText(event) {
    this.setState ({
      text: event.target.value
    });
  }

  render() {
    const textAreaStyle = {
      padding: 15,
      border: "1px solid #404040",
      borderRadius: 10,
      fontSize: 16,
      marginBottom: 40,
      marginTop: 15,
      minHeight: 150,
      fontFamily: "didot"
    }

    const textBox = {
      width: "65%",
      border: "1px solid #ccc",
      borderRadius: 10,
      padding: 10,
    }

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-10" style={textAreaStyle}>
            <p>{this.state.text}</p>
          </div>
          <div>
            <textarea style={textBox} type="text" value={this.state.text} onChange={this.onHandleChangeText.bind(this)} />
          </div>
        </div>
      </div>
    )
  }
}

Home.propTypes = {
  text: React.PropTypes.string,
  onChangeText: React.PropTypes.func
}
