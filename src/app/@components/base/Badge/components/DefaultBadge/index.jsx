"use client";

import React from "react";
import cx from "classnames";
import { dataVariants, dataSizes } from "../../data";

const Badge = (props) => {
  const { 
    as, className,  outline, title = "Badge", size = "base", disabled, variant = "base", ...rest
  } = props;

  const Component = as || 'div';
  const variants = {
    outline: disabled ? 'outline-disabled' : `outline-${variant}`,
    block: disabled ? 'disabled' : variant,
  };

  return (
    <div
      disabled={disabled}
      {...rest}
      className={cx(
        "relative inline-flex items-center font-semibold rounded-full",
        // { "w-full": fullWidth },
        dataVariants[variants[outline ? "outline" : "block"]],
        dataSizes[size],
        className,
      )}
    >
      <span>{title}</span>
    </div>
  );
};

export default Badge;
