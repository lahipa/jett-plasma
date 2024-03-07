import React from "react";
import cx from "classnames";
import { dataVariants, dataSizes } from "../../data";

const Button = (props) => {
  const { 
    as, className,  outline, type = "button", title = "Button", disabled, fullWidth,
    size = "base", variant = "base",
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
        "relative rounded-full px-[16px] focus:outline-none",
        { "w-full": fullWidth },
        dataVariants[variants[outline ? "outline" : "block"]],
        dataSizes[size],
        className,
      )}
    >
      <span>{title}</span>
    </Component>
  );
};

export default Button;
