import React, { forwardRef } from "react";
import cx from "classnames";
import { dataVariants, dataSizes } from "../../data";

const TextareaInput = forwardRef(({ 
  label = "Input Text", className, type = "text", placeholder = "Please input value here..", disabled, fullWidth,
  size = "base", variant = "base", rows = 3,
  ...rest
}, ref) => {
  const variants = disabled ? 'disabled' : variant;

  return (
    <div className={cx('relative flex flex-col gap-[10px]')}>
      {label && <label className="text-[16px] leading-[24px] font-medium">{label}</label>}
      <textarea
        ref={ref}
        type={type}
        disabled={disabled}
        placeholder={placeholder}
        rows={rows}
        {...rest}
        className={cx(
          "relative focus:outline-none whitespace-nowrap mix-blend-darken placeholder:text-[#1C1E22]",
          { 
            "w-full": fullWidth,
          },
          dataVariants[variants],
          dataSizes.textareaInput[size],
          className,
        )}
      />
    </div>
  );
});

TextareaInput.displayName = "TextareaInput";
export default TextareaInput;
