import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as bookActions from '../actions/bookActions';

class Books extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  componentDidMount() {
    
    this.props.getBooks();
    console.log(this.props.books);
  }


  render() {
    
    // this.props.posts = [...this.props.posts, this.props.post];
    return (
      <div>
        <div>
        { this.props.books.map(book =>
            <div className="post-block" key={book.id}>
              <h3>{ book.title }</h3>
              <img src= {book.uri}  alt="book" />
              <div>{ book.description }</div>
            </div>
          )}
        </div>

      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  books: state.books,
})

const mapDispatchToProps = {
  getBooks: bookActions.getBooks,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Books);