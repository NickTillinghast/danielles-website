import React, { Component } from "react";
import "./App.css";
import routes from "./routes";
import Header from "./Header";
import Footer from "./Footer";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        {routes}
        <Footer />
      </div>
    );
  }
}

export default App;
