import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPost, deletePost } from '../actions';

class PostsShow extends Component {
  componentDidMount() {
    // console.log(this.props)
    // if (!this.props.post) {
      const { id } = this.props.match.params;
      this.props.fetchPost(id);
    // }
  }

  onDeleteClick() {
    const { id } = this.props.match.params;
    this.props.deletePost(id, () => {
      this.props.history.push('/');
    });
  }

  render() {
    const { post } = this.props;
    // console.log("post",this.props);
    if (!post) {
      return <div>Loading...</div>
    }
    return (
      <div>
        <Link to="/">Back To Index</Link>
        <button className="btn btn-danger pull-xs-right"
          onClick={this.onDeleteClick.bind(this)}>
            Delete Post
        </button>

        <h3>{post.title}</h3>
        <h6>Category: {post.category}</h6>
        <p>{post.contents}</p>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return { post: state.posts[ownProps.match.params.id]};
}

export default connect(mapStateToProps, { fetchPost, deletePost})(PostsShow);