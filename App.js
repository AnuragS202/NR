import React from "react";
import ReactDOM from "react-dom/client";

//*NOTE:-  Jsx (transpiled before it reaches the js)  - Parcel - babel does the work
//*NOTE:- Jsx => Babel transpiles it to React.CreateElement => ReactElement.Js Object => HTmlElement(render)

// !React Element
const Title = () => (
  <h1 className="head" tabIndex="5">
    Hello World 👍
  </h1>
);

// !React Functional Component
// *NOTE:- component composition - Composing two component into one another . ex- here we are calling <Title/> component into heading component
const HeadingComponent = () => (
  <div id="container">
    <Title />
    <h1 className="heading">
      This is a example of React Functional Component{" "}
    </h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponen />);
