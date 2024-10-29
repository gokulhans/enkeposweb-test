import React from "react";

const ShowErrorMessage = ({ error }) => {
  return (
    <p className="text-center py-16 font-semibold text-xl">Error: {error}</p>
  );
};

export default ShowErrorMessage;
