import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  //   console.log(err.error);
  return (
    <div className="text-center m-4">
      <h1>ooops!!! no page found</h1>
      <h2>Not able to load the content for page requested</h2>
      <h1>{err.data}</h1>
    </div>
  );
};

export default Error;
