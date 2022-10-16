import { Component, Fragment } from "react";
import Background from "../Background";
import PaletteStyle from "./Palette.module.css";
import PropTypes from "prop-types";

class ColorPalette extends Component {
  constructor(props) {
    super(props);

    this.state = {
      color: "",
    };
  }

  changeColor(newColor) {
    this.setState({ color: newColor });
  }

  render() {
    return (
      <Fragment>
        <section>
          <div className={PaletteStyle.colorsSection}>
            {this.props.colorCode.map((color, index) => {
              const colorObj = { backgroundColor: color };
              return (
                <button
                  className={PaletteStyle.button}
                  style={colorObj}
                  key={`color-index-${index}`}
                  onClick={() => this.changeColor(color)}
                >
                  Click
                </button>
              );
            })}
          </div>
          <Background background={this.state.color} />
        </section>
      </Fragment>
    );
  }
}

ColorPalette.propTypes = {
  colorCode: PropTypes.array,
};

export default ColorPalette;
