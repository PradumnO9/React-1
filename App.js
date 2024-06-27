const parent = React.createElement("div", {id: "parent"}, [
    React.createElement("div", {id: "child"}, [
        React.createElement("h1", {}, "Heading!"),
        React.createElement("h2", {}, "Heading2!")
    ])
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

console.log(parent)

root.render(parent);