import React from "react";

const ErrorExample = () => {
  const title = "Random title";
  const clickEvent = () => {
    console.log(title);
  };
  return (
    <React.Fragment>
      <h3>{title}</h3>
      <button type="button" className="btn" onClick={clickEvent}>
        Change title
      </button>
    </React.Fragment>
  );
};

export default ErrorExample;
