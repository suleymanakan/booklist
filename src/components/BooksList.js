import React from 'react';
import {Grid,Card, Button,Icon} from 'semantic-ui-react';
import {Link} from 'react-router-dom';


const extra=(book)=>{
    return(
        <div>
        <Button animated as={Link} to={`/detail/${book.kitap_no}`} >
        <Button.Content visible>Detay</Button.Content>
        <Button.Content hidden>
            <Icon name='arrow right' />
        </Button.Content>
        </Button>
        </div>
    )
}
    

class BooksList extends React.Component{

    render(){
        return(
            <div style={{ marginLeft:100, marginRight:100  }}>
                <Grid  columns={4}>
                { this.props.books.map((book,key)=>(
                    <Grid.Column key={key}>
                        <Card 
                        image={book.kitap_resim_url}
                        header={book.kitap_ad}
                        extra={extra(book)} />
                    </Grid.Column>
                    ))}
                </Grid>
            </div>
        )
    }
}
export default BooksList;