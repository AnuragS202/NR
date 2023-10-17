import React from "react";
import ReactDOM from "react-dom/client";

//Jsx (transpiled before it reaches the js)  - Parcel - babel does the work

// Jsx => Babel transpiles it to React.CreateElement => ReactElement.Js Object => HTmlElement(render)

const jsxHeading = <h1 className="head">Hello World 👍</h1>;
const jsxHeading1 = (
  <h1 className="head" tabIndex="5">
    Hello World 👍
  </h1>
);


console.log(jsxHeading)
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);
