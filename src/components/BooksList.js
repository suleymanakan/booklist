import React from 'react';
import {Grid,Card} from 'semantic-ui-react'

class BooksList extends React.Component{

    render(){
        return(
            <div style={{ marginLeft:100, marginRight:100  }}>
                <Grid  columns={4}>
                { this.props.books.map((book,key)=>(
                    <Grid.Column key={key}>
                        <Card 
                        image={book.kitap_resim_url}
                        header={book.kitap_ad} />
                    </Grid.Column>
                    ))}
                </Grid>
            </div>
        )
    }
}
export default BooksList;