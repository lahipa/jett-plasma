import React from "react";
import cx from "classnames";
import { dataVariants } from "../../data";

const SquarePlaceholder = (props) => {
  const { as, width, height, rounded = true, variant = "base", fullWidth, disabled } = props;

  const Component = as || 'div';
  const variants = disabled ? 'disabled' : variant;

  return (
    <Component
      className={cx(
        "relative animate-pulse ", { "!w-full": fullWidth, "rounded-[10px]": rounded },
        dataVariants[variants],
      )}
      style={{ width, height }}
    />
  )
}

export default SquarePlaceholder;
