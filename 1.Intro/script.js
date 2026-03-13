var h1 = React.createElement("h1", null, "Hi! from React");

var h2 = React.createElement("h2", null, "This is H2");

var div = React.createElement("div", null, [h1, h2]);

var container = document.querySelector("#container");

var root = ReactDOM.createRoot(container);

root.render(div);
