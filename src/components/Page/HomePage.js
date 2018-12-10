import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import BooksList from '../BooksList';

class HomePage extends Component{
    

    render(){
        return(
            <div>
                HomePage --> BooksList
            <BooksList books={this.props.books} />

            </div>
        )
    }
}
export default HomePage;