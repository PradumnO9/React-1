import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => Object => HTML (while rendering)
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "heading1" }, "Heading!"),
    React.createElement("h2", {}, "Heading2!"),
  ]),
]);

// JSX (converted before it reaches the JS engine using parcel)
const heading = <h1 className="heading">I am heading using JSX</h1>;

// Functional Componant

const Title = function() {
  return (
    <div>
      <h3>I am Title</h3>
    </div>
  );
};

const HeadingComponant = () => {
  return (
    <div>
      <Title />
      <h2>I am from heading2 componant</h2>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

console.log(parent);

root.render(<HeadingComponant />);
