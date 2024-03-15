import React from "react";
import cx from "classnames";

const TextareaInput = (props) => {
  const { label, className, textareaClassName, ...rest } = props;

  return (
      <div className={cx('form-group flex flex-col gap-[10px] text-dark-10 text-base w-full', className)}>
        {label && <label className="text-base font-semibold">{label}</label>}
        <textarea
          rows={3}
          className={
            cx("form-control bg-transparent  rounded-[10px] py-[14] px-4 w-full border border-neutral-100 focus:border-neutral-100 ring-0 focus:ring-0 shadow-none focus:outline-none focus:shadow-none", textareaClassName)
          }
          {...rest}
        />
      </div>
  );
};

export default TextareaInput;
