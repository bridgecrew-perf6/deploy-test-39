import React from "react";

export default function CoderStamp() {
  return (
    <footer className="footer">
      This project was created by Kim MacVicar and is{" "}
      <a
        className="link"
        href="https://github.com/KimMacVicar/react-week-5"
        target="_blank"
        rel="noreferrer"
      >
        {" "}
        open-sourced on GitHub
      </a>{" "}
      and{" "}
      <a
        className="link"
        href="https://cerulean-puffpuff-e6565b.netlify.app"
        target="blank"
        rel="noreferrer"
      >
        {" "}
        hosted on Netlify
      </a>
    </footer>
  );
}
