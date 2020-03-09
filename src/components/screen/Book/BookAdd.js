import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Container, Content, Form, Item, Input, Button, Text } from 'native-base';

import { createBook } from '../../redux/actions/books';
import Spinner from '../Spinner/Spinner';

class BookAdd extends Component{

    state = {
        name: "",
        writer: "",
        description: "",
        publisher: "",
        year: "",
        stock: "",
        genre: ""
    };

    onSubmit = async() => {
        await this.props.dispatch(createBook(this.state));

        if(!this.props.books.books.isLoading){
            this.props.navigation.navigate('Book');
        }
        
    }

    render(){
        return(
            <Container>
                <Spinner isLoading={this.props.books.isLoading} />
                <Content>
                    <Form style={{ marginRight: 10 }}>
                        <Item>
                            <Input placeholder="name books" onChangeText={(text) => this.setState({ name: text })} value="hahhaa" />
                        </Item>
                        <Item>
                            <Input placeholder="writer" onChangeText={(text) => this.setState({ writer: text })} />
                        </Item>
                        <Item>
                            <Input placeholder="description" onChangeText={(text) => this.setState({ description: text })} />
                        </Item>
                        <Item>
                            <Input placeholder="publisher" onChangeText={(text) => this.setState({ publisher: text })} />
                        </Item>
                        <Item>
                            <Input placeholder="year" onChangeText={(text) => this.setState({ year: text })} />
                        </Item>
                        <Item>
                            <Input placeholder="stock" onChangeText={(text) => this.setState({ stock: text })} />
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

export default connect(mapStateToProps)(BookAdd);