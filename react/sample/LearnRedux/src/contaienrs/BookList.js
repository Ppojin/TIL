import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectBook } from '../actions/index';

class BookList extends Component {
    renderList() { // -> BookItem
        return this.props.books.map(book => {
            return (
                <li key={book.title} onClick={() => this.props.selectBook(book)}>{book.title}</li>
            )
        })
    }

    render() {
        return (
            <ul>{this.renderList()}</ul>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        books: state.books
    }
}

// 액션을 연동 
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        selectBook: selectBook
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);