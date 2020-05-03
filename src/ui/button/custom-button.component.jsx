import React, { Component } from "react";

import "./custom-button.styles.scss";

class CustomButton extends Component {
  constructor(props) {
    super(props);
  }

  renderButton = () => {
    const { type, url, target } = this.props;

    switch (type) {
      case "link":
        return <a className="btn" href={url} target={target || '_self'}>{this.props.children}</a>;
      default:
        return <button className="btn" type="button">{this.props.children}</button>;
    }
  };

  render() {
    return (
      <>
        {this.renderButton()}
      </>
    );
  }
}

export default CustomButton;
