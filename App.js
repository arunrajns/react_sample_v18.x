import React from "react";
import ReactDOM from "react-dom"
const parent = React.createElement("div", {id: "parent"}, "Hello World!!"); // return React Element ==> js object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent); // steps crete a actual html elemt and injected into real dom