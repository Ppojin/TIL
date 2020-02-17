import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPost, deletePost } from '../actions';

class PostShow extends Component {
  componentDidMount() {
    // if(!this.props.post){
    const { id } = this.props.match.params;
    this.props.fetchPost(id);
    // }
  }

  handleDeleteClick() {
    const {id } = this.props.match.params;
    this.props.deletePost(id, ()=>{this.props.history.push('/')});
  }

  render() {
    const { post } = this.props;
    // console.log(post)
    if (!post) {
      return <div>loading...</div>
    }
    return (
      <div>
      <Link to="/">Back To Index</Link>
      <button className="btn btn-danger pull-xs-right" onClick={this.handleDeleteClick.bind(this)}>delete Post</button>
        <h1>{post.title}</h1>
        <h2>{post.category}</h2>
        <h3>{post.contents}</h3>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    post: state.posts[this.ownprops.match.params]
  }
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostShow);