// Include React
// var React = require("react");
import React from "react";

// Here we include all of the sub-components
// var Search = require("./children/Search");
// var Results = require("./children/Results");
// var SavedArticles = require("./children/SavedArticles");
import Search from "./children/Search";
import Results from "./children/Results";
import SavedArticles from "./children/SavedArticles";

// This is the main component
class Main extends React.Component {

  // Here we describe our component's render method
  render() {
    return (
      <div className="container">
          <div className="jumbotron" style={styles.jumboStyle}>
            <h1 style={styles.h1}>New York Times</h1>
          </div>
            <div style={styles.font}>
              <Search />
              <Results />
              <SavedArticles />
            </div>
      </div>
    );
  }
};

const styles = {
  h1: {
    textAlign: "center",
    fontFamily: 'Muli',
    color: "white"
  },
  font: {
    fontFamily: 'Muli'
  },
  jumboStyle: {
    backgroundColor: "#337ab7"
  }
};

// Export the component back for use in other files
module.exports = Main;
