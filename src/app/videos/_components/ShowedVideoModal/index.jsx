import React from "react";

const ShowedVideoModal = ({ show, data }) => {

  if (!show) return null;

  return (
    <div>
      <p>Showed</p>
    </div>
  );
};

export default ShowedVideoModal;
