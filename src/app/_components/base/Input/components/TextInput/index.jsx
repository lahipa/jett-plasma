import React from "react";
import cx from "classnames";

const TextInput = ({ label, type, className, inputClassName, ...rest }) => {
  return (
    <div className={cx('form-group flex flex-col gap-[10px] text-dark-10 text-base', className)}>
      {label && <label className="text-base font-semibold" >{label}</label>}
      <input
        type={type}
        className={cx("form-control border border-neutral-100 bg-transparent  !outline-none rounded-[10px] py-[14] px-4 focus:border-neutral-100 ring-0 focus:ring-0 shadow-none focus:outline-none focus:shadow-none", inputClassName)}
        {...rest}
      />
    </div>
  );
};

export default TextInput;
