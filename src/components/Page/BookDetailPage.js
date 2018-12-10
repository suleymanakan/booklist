import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import BookDetail from '../BookDetail';

class BookDetailPage extends Component{
   

    render(){
        const book= this.props.books.find(item=>item.kitap_no===this.props.match.params.id);
        console.log(book)
        console.log(this.props.books)
        return(
            <div>
                BookDetailPage --> BookDetail
                <BookDetail 
                books={this.props.books}
                book={book} />
            </div>
        )
    }
}

export default BookDetailPage;