import React from "react";

class Search extends React.Component {
  state = {
    show: false
  };

  openSearch = () => {
    this.setState({ show: true });
  };

  closeSearch = () => {
    this.setState({ show: false });
  };
  render() {
    const { show } = this.state;
    return (
      <div>
        <div class="search-wrap" id="search-wrap">
      
          {show ? (
            <div>
              <a href="#" class="search-close js-search-close">
                <span class="fa fa-times" onClick={() => this.closeSearch()} />
              </a>
              <form action="#" method="post">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Search..."
                />
              </form>
            </div>
            ) : (
              ""
          )}
        
        </div>
        <div class="icons">
          <a href="#" class="icons-btn js-search-open">
            <span class="fa fa-search" onClick={() => this.openSearch()} />
          </a>
        </div>
      </div>
    );
  }
}
export default Search;
