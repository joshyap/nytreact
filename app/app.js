// Include the Main React Dependencies
var React = require("react");
var ReactDOM = require("react-dom");

// Include the Main Component
// var Main = require("./components/Main");
// import Main from "./components/Main";

// grab the routes
import routes from "./routes/htmlRoutes.js";

// This code here allows us to render our main component
// ReactDOM.render(<Main />, document.getElementById("app"));

ReactDOM.render(routes, document.getElementById("app"));
