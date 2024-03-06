import React from "react";

const TextareaInput = (props) => {
  const { label } = props;

  return (
    <div>
      <textarea type={type} {...props} rows={2} />
    </div>
  );
};

export default TextareaInput;
