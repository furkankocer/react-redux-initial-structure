import React, { Component } from "react";
import { connect } from "react-redux";

class CategoryList extends Component {
  render() {
    return (
      <div>
        <h3>Category List</h3>
        <h5>Se.çili category: {this.props.currentCategory.categoryName}</h5>
      </div>
    );
  }
}

function mapStateTopProps(state) {
  return {
    currentCategory: state.changeCategoryReducer,
  };
}

export default connect(mapStateTopProps)(CategoryList);
