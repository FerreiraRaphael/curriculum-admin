import { Children } from "react";
import classnames from "classnames";
import MainButton from "../mainButton";
import ChildButton from "../childButton";

export function getChildren(children) {
  let buttons = {
    main: null,
    child: []
  };

  Children.forEach(children, function(child) {
    if (child.type === MainButton) {
      buttons.main = child;
      return;
    }
    buttons.child.push(child);
  });

  return buttons;
}

export function getClasses(props) {
  return classnames(
    {
      "mfb-zoomin": props.effect === "zoomin",
      "mfb-slidein": props.effect === "slidein",
      "mfb-slidein-spring": props.effect === "slidein-spring",
      "mfb-fountain": props.effect === "fountain",
      "mfb-component--tl": props.position === "tl",
      "mfb-component--tr": props.position === "tr",
      "mfb-component--bl": props.position === "bl",
      "mfb-component--br": props.position === "br"
    },
    props.className
  );
}

export function childrenValidator(props, propName, componentName) {
  let children = props[propName];
  let mainButtonCount = 0;
  let childButtonCount = 0;
  let otherCount = 0;
  let msg;
  Children.forEach(children, function(child) {
    if (child.type === MainButton) {
      return mainButtonCount++;
    }
    if (child.type === ChildButton) {
      return childButtonCount++;
    }
    otherCount++;
  });
  if (mainButtonCount === 0) {
    msg =
      "Prop `children` must contain a MainButton component in `" +
      componentName +
      "`.";
    return new Error(msg);
  }
  if (mainButtonCount > 1) {
    msg =
      "Prop `children` must contain only 1 MainButton component in `" +
      componentName +
      "`, but " +
      mainButtonCount +
      " exist.";
    return new Error(msg);
  }
  if (otherCount) {
    msg =
      "Prop `children` contains elements other than MainButton and ChildButton " +
      "components in `" +
      componentName +
      "`.";
    return new Error(msg);
  }
}
