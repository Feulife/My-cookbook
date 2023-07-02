import React from "react";

const Footer = () => {
  return (
    <>
      <div className="app_footer noselect">
        <div>
          Built using{" "}
          <a
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>{" "}
          and{" "}
          <a
            href="https://mongodb.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            MongoDB
          </a>
          {", "}
          <a
            href="https://graphql.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            GraphQL
          </a>
          {", "}
          <a
            href="hhttps://www.apollographql.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Apollo GraphOS
          </a>
          .
        </div>
      </div>
    </>
  );
};

export default Footer;
