import React, {Component} from 'react';
import '../Card.css';
import { Card,Grid, Image } from 'semantic-ui-react';

class BookDetail extends Component{

    render(){
        const book=this.props.book;
        return(
            <div className='bookCardDetail'>
        
                <Grid.Column >
                <Card>
                    <Image src={book.kitap_resim_url}/>
    
                    <Card.Content>
                    <Card.Header>Kitap Adı: {book.kitap_ad}</Card.Header>
                    <Card.Description>Kitap No: {book.kitap_no}</Card.Description>
                    <Card.Description>Yazar: {book.kitap_yazar}</Card.Description>
                    <Card.Description>Yayın Evi: {book.kitap_yayin}</Card.Description>
                    </Card.Content>
                </Card>         
                </Grid.Column>
            
            </div>
        )
    }

}
export default BookDetail;