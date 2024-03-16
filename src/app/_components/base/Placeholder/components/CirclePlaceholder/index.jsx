import React from "react";
import cx from "classnames";
import { dataVariants } from "../../data";

const CirclePlaceholder = (props) => {
  const { as, size = 40, variant = "base", disabled } = props;

  const Component = as || 'div';
  const variants = disabled ? 'disabled' : variant;

  return (
    <Component
      className={cx(
        "relative animate-pulse rounded-full",
        dataVariants[variants],
      )}
      style={{ width: size, height: size }}
    />
  )
}

export default CirclePlaceholder;
