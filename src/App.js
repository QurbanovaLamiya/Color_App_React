import { Component, Fragment } from "react";
import "./App.css";
import ColorPalette from "./components/ColorPalette";
import colorCode from "./components/ColorsCode";

class App extends Component {
  render() {
    return (
      <Fragment>
        <h1 className="App">Color Palette</h1>
        <ColorPalette colorCode={colorCode} />
      </Fragment>
    );
  }
}

export default App;
