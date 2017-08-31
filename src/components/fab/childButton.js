import React from "react";
import classnames from "classnames";

class ChildButton extends React.Component {
  constructor(props) {
    super(props);

    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick() {
    if (this.props.disabled === true) {
      return;
    }

    if (this.props.onClick) {
      this.props.onClick();
    }
  }

  render() {
    let iconClass = classnames("mfb-component__child-icon", "material-icons");
    let className = classnames(
      "btn btn-default FAB mfb-component__button--child",
      this.props.className,
      { "mfb-component__button--disabled": this.props.disabled }
    );
    return (
      <li>
        <a
          href={this.props.href}
          data-mfb-label={this.props.label}
          onClick={this.handleOnClick}
          style={this.props.style}
          className={className}
        >
          <i className={iconClass}>
            {this.props.icon}
          </i>
        </a>
      </li>
    );
  }
}

export default ChildButton;
