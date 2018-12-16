import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import BooksList from '../BooksList';

class HomePage extends Component{
    static propTypes={
        books:PropTypes.array.isRequired
    }

    render(){
        return(
            <div>
            <BooksList books={this.props.books} />

            </div>
        )
    }
}
export default HomePage;