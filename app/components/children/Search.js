import React from "react";
import helper from "../../utils/helper";


class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      searchTerm: ""
    };
    this.search = this.search.bind(this);
    this.updateSearchTerm = this.updateSearchTerm.bind(this);
  }
  search(e) {
    e.preventDefault();
    helper.runQuery(this.state.searchTerm);
  }
  updateSearchTerm(e) {
    this.setState({
      // think of this like jquery grabbing a target
      searchTerm: e.target.value
    });
    console.log(this.state);
  }
  render() {
    return(
      <div className="row">
        <div className="col-sm-12">
          <div className="panel panel-primary">
            <div className="panel-heading">
              <h3 className="panel-title">
                <i className="fa fa-list-alt glyphicon glyphicon-search"></i> Search
              </h3>
            </div>
            <div className="panel-body">
              <form role="form">
                {/* search term */}
                <div className="form-group">
                  <label htmlFor="search">Search Term:</label>
                  <input type="text" className="form-control" id="searchTerm" onChange={this.updateSearchTerm} value={this.state.searchTerm} />
                </div>
                {/* number of records to retrieve */}
                <div className="form-group">
                  <label htmlFor="records">Number of Records to Retrieve: </label><br />
                  <select className="form-control" id="numRecordsSelect">
                    <option value="1">1</option>
                    <option value="5">5</option>
                    <option value="10">10</option>
                  </select>
                </div>
                {/* optional start year */}
                <div className="form-group">
                  <label htmlFor="search">Optional Start Year:</label>
                  <input type="text" className="form-control" />
                </div>
                {/* optional end year */}
                <div className="form-group">
                  <label htmlFor="search">Optional End Year:</label>
                  <input type="text" className="form-control" id="searchTerm" />
                </div>
                <div style={styles.buttonStyle}>
                  {/* submit button */}
                  <button type="submit" className="btn btn-default" id="runSearch" id="searchTerm" onClick={this.search} >
                    <i className="fa fa-list-alt glyphicon glyphicon-search"></i> Search
                  </button>

                  {/* clear results button */}
                  <button type="button" className="btn btn-default" id="clearAll">
                    <i className="fa fa-trash glyphicon glyphicon-trash"></i> Clear Results
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const styles= {
    buttonStyle: {
      display: "flex",
      justifyContent: "center"
    }
};


module.exports = Search;
