import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Container, Content, Form, Item, Input, Button, Text } from 'native-base';

import { updateBook } from '../../redux/actions/books';
import Spinner from '../Spinner/Spinner';

class BookEdit extends Component{

    state = {
        name: "",
        writer: "",
        description: "",
        publisher: "",
        year: "",
        stock: "",
        genre: ""
    };

    componentDidMount(){
        const book = this.props.navigation.getParam("book");

        this.setState({
            name: book.name,
            writer: book.writer,
            description: book.description,
            publisher: book.publisher,
            year: book.year,
            stock: book.stock,
            genre: book.genre
        });
    }

    onSubmit = async() => {
        const book = this.props.navigation.getParam("book");
        await this.props.dispatch(updateBook(book.id, this.state));

        if(!this.props.books.books.isLoading){
            this.props.navigation.navigate('Book');
        }
        
    }

    render(){
        console.log(this.state);
        return(
            <Container>
                <Spinner isLoading={this.props.books.isLoading} />
                <Content>
                    <Form style={{ marginRight: 10 }}>
                        <Item>
                            <Input placeholder="name books" onChangeText={(text) => this.setState({ name: text })} value={this.state.name} />
                        </Item>
                        <Item>
                            <Input placeholder="writer" onChangeText={(text) => this.setState({ writer: text })} value={this.state.writer} />
                        </Item>
                        <Item>
                            <Input placeholder="description" onChangeText={(text) => this.setState({ description: text })} value={this.state.description} />
                        </Item>
                        <Item>
                            <Input placeholder="publisher" onChangeText={(text) => this.setState({ publisher: text })} value={this.state.publisher} />
                        </Item>
                        <Item>
                            <Input placeholder="year" onChangeText={(text) => this.setState({ year: text })} value={this.state.year} />
                        </Item>
                        <Item>
                            <Input placeholder="stock" onChangeText={(text) => this.setState({ stock: text })} value={this.state.stock} />
                        </Item>
                    </Form>
                    <Button primary style={{ margin: 10 }} onPress={this.onSubmit}>
                        <Text>Save</Text>
                    </Button>
                </Content>
            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        books: state.books
    }
}

export default connect(mapStateToProps)(BookEdit);