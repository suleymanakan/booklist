import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import BookDetail from '../BookDetail';

class BookDetailPage extends Component{
   

    render(){
        const bookId= Number(this.props.match.params.id)
        const book= this.props.books.find(item=>item.kitap_no===bookId);
        
        return(
            <div>
                BookDetailPage --> BookDetail
                <BookDetail 
                book={book} />
            </div>
        )
    }
}

export default BookDetailPage;