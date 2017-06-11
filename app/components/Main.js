// Include React
// var React = require("react");
import React from "react";
import {Route, Link} from "react-router-dom";
// Here we include all of the sub-components
// var Search = require("./children/Search");
// var Results = require("./children/Results");
// var SavedArticles = require("./children/SavedArticles");
import Search from "./children/Search";
import Results from "./children/Results";
import SavedArticles from "./children/SavedArticles";

var helpers = require("./app/utils/helpers.js");

// This is the main component
class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
      limit: 1,
      startYear: "",
      endYear: "",
      searchResults: [],
      savedArticles: []
    };

    // bind "this" fot the main component functions
    this.setSearch = this.setSearch.bind(this);
    this.setResults = this.setResults.bind(this);
    this.saveArticle = this.saveArticle.bind(this);
    this.removeArticle = this.removeArticle.bind(this);
    this.getArticles = this.getArticles.bind(this);
    this.clearSearch = this.clearSearch.bind(this);

  }

  componentDidUpdate(prevState) {
    //console.log(this.state.savedArticles);
  }

  componentDidMount() {
    // Get the latest history.
    helpers.getSavedArticles().then((response) => {
      //console.log(response);
      if (response.data !== this.state.savedArticles) {
        //console.log("Saved Articles", response.data);
        this.setState({ savedArticles: response.data });
      }
    });
  }


  setSearch(term, limit, startYear, endYear) {
    this.setState({
      searchTerm: term,
      limit: limit,
      startYear: startYear,
      endYear: endYear
    });
  }

  setResults(results) {
    this.setState({searchResults: results});
  }

  saveArticle(index) {
    //console.log("Saving article at index " +index+" to mongodb");
    helpers.saveArticle(this.state.searchResults[index]).then((response) => {
      this.getArticles();
    });
  }

  removeArticle(id) {
    //console.log("Removing article with id " +id+" from mongodb");
    helpers.removeArticle(id).then((response) => {
      this.getArticles();
    });
  }

  getArticles() {
    //console.log("Getting all saved articles from mongodb");
    helpers.getSavedArticles().then((response) => {
      this.setState({savedArticles: response.data});
    });
  }

  clearSearch() {
    //console.log("Clearing search history and resetting the search fields");
    var newState = {
      searchTerm: "",
      limit: 5,
      startYear: "",
      endYear: "",
      searchResults: []
    };
    this.setState(newState);
  }
    // Here we describe our component's render method
    render() {
      return (
        <div className="container">
            <div className="jumbotron" style={styles.jumboStyle}>
              <h1 style={styles.h1}>New York Times</h1>
            </div>
              <div style={styles.font}>
                // <Search />
                // <Results />
                // <SavedArticles />

                    // from g
                    <Link to="/results"><button className="btn btn-success btn-lg">Results</button></Link>
                    <Link to="/saved"><button className="btn btn-warning btn-lg">Saved Articles</button></Link>
                    // end from g

                <Search setSearch={this.setSearch} setResults={this.setResults} clearSearch={this.clearSearch}/>
                <br/><br/>
                <div>
                  <Route exact path="/" render={()=><Results passedResults={this.state.searchResults} saveArticle={this.saveArticle}/>}/>
                  <Route path="/results" render={()=><Results passedResults={this.state.searchResults} saveArticle={this.saveArticle}/>} />
                  <Route path="/saved" render={()=><Saved savedArticles={this.state.savedArticles} removeArticle={this.removeArticle}/>} />
                </div>
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
