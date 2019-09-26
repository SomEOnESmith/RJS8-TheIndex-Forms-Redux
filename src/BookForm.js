import React, { Component } from "react";

import { connect } from "react-redux";

import * as actionCreators from "./store/actions/index";

class BookForm extends Component {
  state = {
    title: "",
    color: "",
    authors: [this.props.author.id]
  };

  // componentWillUnmount() {
  //   if (this.props.errors.length) this.props.resetErrors();
  // }

  submitBook = event => {
    event.preventDefault();
    this.props.postBook(this.state, this.props.closeModal);
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  render() {
    return (
      <div className="mt-5 p-2">
        <form onSubmit={this.submitBook}>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">Title</span>
            </div>
            <input
              type="text"
              className="form-control"
              name="title"
              onChange={this.handleChange}
            />
          </div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">Book Color</span>
            </div>
            <input
              type="text"
              className="form-control"
              name="color"
              onChange={this.handleChange}
            />
          </div>
          {/* <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">Authors</span>
            </div>
            <input
              type="text"
              className="form-control"
              name="authors"
              onChange={this.handleChange}
            />
          </div> */}
          <input type="submit" />
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    // errors: state.rootErrors.errors
  };
};

const mapDispatchToProps = dispatch => {
  return {
    postBook: (newBook, closeModal) =>
      dispatch(actionCreators.postBook(newBook, closeModal))
    // resetErrors: () => dispatch(actionCreators.resetErrors())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookForm);

// {!!errors.length && (
//   <div className="alert alert-danger" role="alert">
//     {errors.map(error => (
//       <p key={error}>{error}</p>
//     ))}
//   </div>
// )}
