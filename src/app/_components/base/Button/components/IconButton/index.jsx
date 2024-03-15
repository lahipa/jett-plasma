"use client";

import React from "react";
import cx from "classnames";
import { dataVariants, dataSizes } from "../../data";
import { Icon } from "../../..";

const IconButton = (props) => {
  const { 
    as, className,  outline, type = "button", title = "Button", disabled, fullWidth,
    size = "base", variant = "base", icon = "IconMenu2",
    ...rest
  } = props;

  const Component = as || 'button';
  const variants = {
    outline: disabled ? 'outline-disabled' : `outline-${variant}`,
    block: disabled ? 'disabled' : variant,
  };

  const iconSize = { "xs": 16, "sm": 18, "base": 20, "lg": 24 }[size];

  return (
    <Component
      type={type}
      disabled={disabled}
      {...rest}
      className={cx(
        "relative font-semibold rounded-full focus:outline-none whitespace-nowrap",
        dataVariants[variants[outline ? "outline" : "block"]],
        dataSizes.iconButton[size],
        className,
      )}
    >
      <div className="w-full h-full flex items-center justify-center">
        <Icon icon={icon} size={iconSize} color="text-inherit" />
      </div>
    </Component>
  );
};

export default IconButton;
