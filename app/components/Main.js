// Include React
// var React = require("react");
import React from "react";

// Here we include all of the sub-components
var Search = require("./children/Search");
var Results = require("./children/Results");
var SavedArticles = require("./children/SavedArticles");

// This is the main component
class Main extends React.Component {

  // Here we describe our component's render method
  render() {
    return (
      <div className="container">
          <div className="jumbotron">
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
    fontFamily: 'Muli'
  },
  font: {
    fontFamily: 'Muli'
  }
};

// Export the component back for use in other files
module.exports = Main;
