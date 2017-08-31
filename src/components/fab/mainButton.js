import React from "react";
import classnames from "classnames";

class MainButton extends React.Component {
  render() {
    const iconResting = classnames(
      "mfb-component__main-icon--resting",
      "material-icons"
    );
    const iconActive = classnames(
      "mfb-component__main-icon--active",
      "material-icons"
    );
    const mainClass = classnames(
      "btn btn-default FAB mfb-component__button--main",
      this.props.className
    );
    const label = this.props.label
      ? { "data-mfb-label": this.props.label }
      : {};

    return (
      <a
        href={this.props.href}
        style={this.props.style}
        className={mainClass}
        onClick={this.props.onClick}
        {...label}
      >
        {this.props.icon
          ? <i className="material-icons">
              {this.props.icon}
            </i>
          : [
              <i key="iconResting" className={iconResting}>
                {this.props.iconResting}
              </i>,
              <i key="iconActive" className={iconActive}>
                {this.props.iconActive}
              </i>
            ]}
      </a>
    );
  }
}

MainButton.defaultProps = {
  href: "#",
  onClick: function() {},
  iconResting: "",
  iconActive: "",
  label: null
};

export default MainButton;
