import React from "react";
import PropTypes from "prop-types";

import { getClasses, getChildren, childrenValidator } from "./utils";

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };

    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu(evt) {
    evt.preventDefault();

    if (this.props.method === "hover") {
      return;
    }
    // flip the state from open to close and viceversa
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    let classes = getClasses(this.props);
    let buttons = getChildren(this.props.children);

    let main =
      buttons.main &&
      React.cloneElement(buttons.main, {
        onClick: this.toggleMenu
      });

    return (
      <ul
        className={classes}
        data-mfb-toggle={this.props.method}
        data-mfb-state={this.state.isOpen ? "open" : "closed"}
      >
        <li className="mfb-component__wrap">
          {main}
          <ul className="mfb-component__list">
            {buttons.child}
          </ul>
        </li>
      </ul>
    );
  }
}

Menu.propTypes = {
  effect: PropTypes.oneOf(["zoomin", "slidein", "slidein-spring", "fountain"])
    .isRequired,
  position: PropTypes.oneOf(["tl", "tr", "bl", "br"]).isRequired,
  children: childrenValidator
};

export default Menu;
