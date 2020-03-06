import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Container, Content, Form, Item, Input, Button, Text } from 'native-base';

import { createBook } from '../../redux/actions/books';

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
        console.log("masuk sini")
        this.props.dispatch(createBook(this.state));
        this.props.navigation.navigate('Book');
    }

    render(){
        return(
            <Container>
                <Content>
                    <Form style={{ marginRight: 10 }}>
                        <Item>
                            <Input placeholder="name books" onChangeText={(text) => this.setState({ name: text })} />
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

export default connect()(BookAdd);