import React from "react";
import cx from "classnames";
import { dataVariants, dataSizes } from "../../data";

const TextInput = (props) => {
  const { 
    label = "Input Text", className, type = "text", placeholder = "Please input value here..", disabled, fullWidth,
    size = "base", variant = "base",
    ...rest
  } = props;

  const variants = disabled ? 'disabled' : variant;

  return (
    <div className={cx('relative flex flex-col gap-[10px]')}>
      {label && <label className="text-[16px] leading-[24px] font-medium">{label}</label>}
      <input
        type={type}
        disabled={disabled}
        placeholder={placeholder}
        {...rest}
        className={cx(
          "relative focus:outline-none whitespace-nowrap mix-blend-darken placeholder:text-[#1C1E22]",
          { 
            "w-full": fullWidth,
          },
          dataVariants[variants],
          dataSizes.textInput[size],
          className,
        )}
      />
    </div>
  );
};

export default TextInput;
