import React from "react";

const CustomForm = ({ children }) => {
  return (
    <div>
      <form>{children}</form>
    </div>
  );
};

export default CustomForm;
