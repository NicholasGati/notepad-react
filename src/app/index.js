import React from "react";
import {render} from "react-dom";

import {Home} from "./components/Home";
import {Header} from "./components/Header";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "Nick",
      text: "Type anything..."
    }
  }

  onChangeText(newText) {
    this.setState ({
      text: newText
    });
  }

  render() {
    return (
      <div className="container">
      <Header />
        <div className="row">
          <div className="col-md-12">
            <h1>Hello {this.state.name}!</h1>
            <h5>An example of a basic react.js app</h5>
            <Home text={this.state.text} onChangeText={this.onChangeText.bind(this)}/>
          </div>
        </div>
      </div>
    )
  }
}

render(<App/>, window.document.getElementById("app"));
