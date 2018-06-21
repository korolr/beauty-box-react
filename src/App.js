import React, { Component } from "react";
import Header from "./component/header";
import Content from "./component/content";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Content />
      </div>
    );
  }
}

export default App;
