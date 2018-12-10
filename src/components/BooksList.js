import React from 'react';
class BooksList extends React.Component{


    render(){
        return(
            <div><hr/>
                {this.props.books.map(book=>
                <div>
                    <h5>{book.kitap_ad}</h5>
                    <h4>{book.kitap_yayin}</h4><hr/> </div>)}
            </div>
        )
    }
}
export default BooksList;