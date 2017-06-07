import React from "react";


class Search extends React.Component {
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
                  <input type="text" className="form-control" id="searchTerm" />
                </div>
                {/* number of records to retrieve */}
                <div className="form-group">
                  <label htmlFor="search">Number of Records to Retrieve:</label>
                  <input type="text" className="form-control" id="searchTerm" />
                </div>
                {/* optional start year */}
                <div className="form-group">
                  <label htmlFor="search">Optional Start Year:</label>
                  <input type="text" className="form-control" id="searchTerm" />
                </div>
                {/* optional end year */}
                <div className="form-group">
                  <label htmlFor="search">Optional End Year:</label>
                  <input type="text" className="form-control" id="searchTerm" />
                </div>
                <div style={styles.buttonStyle}>
                  {/* submit button */}
                  <button type="submit" className="btn btn-default" id="runSearch">
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
