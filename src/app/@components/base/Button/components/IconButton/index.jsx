import React from "react";
import cx from "classnames";
import { dataVariants, dataSizes } from "../../data";


const IconButton = (props) => {
  const { 
    as, className, outline, type = "button", title = "Button", disabled, fullWidth,
    size = "base", variant = "base", icon,
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
        "relative font-semibold rounded-full focus:outline-none text-white flex items-center justify-center",
        { "w-full": fullWidth },
        dataVariants[variants[outline ? "outline" : "block"]],
        dataSizes[size],
        className,
      )}
    >
      {title}
      {icon && <img src={icon} alt="" className="w-5 h-5 ml-2" />}
    </Component>
  );
};

export default IconButton;
