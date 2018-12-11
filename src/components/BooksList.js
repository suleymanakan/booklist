import React from 'react';
import { Card, Grid } from 'semantic-ui-react'
class BooksList extends React.Component{


    render(){
        return(
            <div>
            <Grid  columns={3}>
               { this.props.books.map((book,key)=>(
                   <Grid.Column key={key}>
                       <Card 
                         image={book.kitap_resim_url}
                         header={book.kitap_ad}/>
                   </Grid.Column>


                ))}
            </Grid>
            </div>
        )
    }
}
export default BooksList;