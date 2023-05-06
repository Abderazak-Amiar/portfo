import { useRouteError } from "react-router-dom";
import React from "react";

function ErrorPage(){
    const error = useRouteError();

    console.log(error);

    return (
        <div id="error-page" className="container mt-5 pt-5 h-100">
          <h1>Oops!</h1>
          <p>Sorry, an unexpected error has occurred.</p>
          <p>
            <i>{error.statusText || error.message}</i>
          </p>
        </div>
      );
}
export default  ErrorPage;
