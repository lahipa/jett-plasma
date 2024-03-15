"use client";

import React from "react";
import cx from "classnames";
import { Icon } from "@/app/_components/base";
import { dataVariants, dataSizes } from "../../data";

const Button = (props) => {
  const { 
    as, className,  outline, type = "button", title = "Button", disabled, fullWidth,
    size = "base", variant = "base", icon, iconPosition = "left", 
    ...rest
  } = props;

  const Component = as || 'button';
  const variants = {
    outline: disabled ? 'outline-disabled' : `outline-${variant}`,
    block: disabled ? 'disabled' : variant,
  };

  return (
    <Component
      type={type}
      disabled={disabled}
      {...rest}
      className={cx(
        "relative font-semibold rounded-full focus:outline-none whitespace-nowrap",
        { 
          "w-full": fullWidth,
          "flex gap-[8px] items-center justify-center": !!icon,
          "flex-row-reverse": iconPosition === "left"
        },
        dataVariants[variants[outline ? "outline" : "block"]],
        dataSizes.defaultButton[size],
        className,
      )}
    >
      <span>{title}</span>
      {icon && <Icon icon={icon} size={20} color="text-inherit" />}
    </Component>
  );
};

export default Button;
