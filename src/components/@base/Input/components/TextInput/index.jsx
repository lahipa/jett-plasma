import React from "react";

const TextInput = (props) => {
  const { label } = props;

  return (
    <div>
      <input type={type} {...props} />
    </div>
  );
};

export default TextInput;
