import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { createPost } from '../actions';

class PostsNew extends Component {
  renderField(field) {
    const { meta } = field; //  meta = field.meta 
    const { touched, error } = meta
    console.log(meta.touched + " / " + meta.error);

    let cName = `form-group${touched && error ? ' has-danger' : ''}`;

    return (
      <div className={cName}>
        <label>{field.label}</label>
        <input className="form-control" type="text" autocomplete="off"
          {...field.input} />
        <div>{touched && error ? meta.error : ""}</div>
      </div>
    )
  }

  onSubmit(values) {
    // submit values to creatPost function()
    this.props.createPost(values, () => {
      this.props.history.push('/')
    })
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this)/*.bind(this)=????*/)}>
        <Field label="Title For Post" name="title" component={this.renderField} />
        <Field label="Category" name="category" component={this.renderField} />
        <Field label="Blog contents" name="contents" component={this.renderField} />

        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="" className="btn btn-danger">Cancel</Link>
      </form>
    );
  }
}

function validate(values) {
  const errors = {}

  if (!values.title || values.title.length < 3) {
    errors.title = "제목을 3글자 이상 입력해 주세요.";
  }

  if (!values.category) {
    errors.category = "카테고리를 지정해 주세요.";
  }

  if (!values.contents) {
    errors.contents = "블로그의 내용을 입력해 주세요.";
  }

  return errors;
}

// ======= 1 =======
// import { bindActionCreators } from 'redux';
// function mapDispatchToPorps(dispatch) {
//   bindActionCreators(
//     { createPost },
//     dispatch
//   )
// }
// export default reduxForm({
//   validate: validate,
//   form: 'PostsNewForm'
// })(connect(null, mapDispatchToPorps)(PostsNew));

// ======= 2 =======
export default reduxForm({
  validate: validate,
  form: 'PostsNewForm'
})(connect(null, {createPost})(PostsNew));