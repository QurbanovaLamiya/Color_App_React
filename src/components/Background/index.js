import { Component, Fragment } from "react";
import backgroundStyle from "./background.module.css";
import PropTypes from "prop-types";

class Background extends Component {
  render() {
    return (
      <Fragment>
        <div
          style={{ background: this.props.background }}
          className={backgroundStyle.colorCode}
        >
          {this.props.background}
        </div>
      </Fragment>
    );
  }
}

Background.propTypes = {
  background: PropTypes.string,
};

export default Background;
