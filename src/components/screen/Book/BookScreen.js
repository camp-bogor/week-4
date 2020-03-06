import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView, View, ActivityIndicator, Button } from 'react-native';

import BookItem from './BookItem';
import { getBooks } from '../../redux/actions/books';

class Book extends Component{

    componentDidMount(){
        this.getBook();
    }

    async getBook(){
        await this.props.dispatch(getBooks());
    }

    render(){
        const {navigation, books} = this.props;
        return(
            <View style={{ marginTop: 10, marginLeft: 10, marginBottom: 10 }}>
                <BookItem books={books.books} navigation={navigation.navigation} />
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        books: state.books
    }
}

export default connect(mapStateToProps)(Book);