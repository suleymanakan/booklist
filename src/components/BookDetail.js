import React, {Component} from 'react';

class BookDetail extends Component{

    render(){
        return(
            <div><hr/>
                {
                    this.props.books.map(book=>
                        <div> 
                        {book.kitap_resim_url}
                        <h5>{book.kitap_ad}</h5>
                        <h6>{book.kitap_no}</h6>
                        <h6>{book.kitap_yayin}</h6>
                        <h6>{book.kitap_yazar}</h6> <hr/>

                        </div>
                        )
                }
                
            </div>
        )
    }

}
export default BookDetail;