import React, { Component } from "react";
import { connect } from "react-redux";
import ReactTable from "react-table";
import "react-table/react-table.css";

const mapStateToProps = state => {
  return { articles: state.articles };
};

class ConnectedList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const columns = [
      {
        Header: "Title",
        accessor: "title",
      },
      {
        Header: "Link",
        accessor: "link",
        filterable: false,
      }
    ];
    return <ReactTable 
            columns={columns} 
            data={this.props.articles}
            defaultPageSize = {5}
            filterable />;
  }
}

const List = connect(mapStateToProps)(ConnectedList);

export default List;