import React, { Component } from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';

class HomeScreen extends Component{
    static navigationOptions = {
        title: "Home",
        // headerStyle: {
        //     backgroundColor: '#0000FF',
        //   },
        // headerTintColor: '#fff',
        // headerTitleStyle: {
        //     fontWeight: 'bold',
        // },
    };

    render(){
        const books = {
            name: "books 1",
            price: 2000,
            stock: 50
        }
        return(
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Home Screen</Text>
                <TouchableOpacity
                    style={{ backgroundColor: '#1C3F94', padding: 8, justifyContent: 'center', alignItems: 'center', width: 335, marginTop: 20}}
                    onPress={() => this.props.navigation.navigate('Book', {
                        itemId: 80,
                        otherParams: books
                    })}>
                        <Text style={{  color: "#fff" }}>Books</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={{ backgroundColor: '#1C3F94', padding: 8, justifyContent: 'center', alignItems: 'center', width: 335, marginTop: 10}}
                    onPress={() => this.props.navigation.navigate('AddBook')}>
                        <Text style={{ color: "#fff" }}>Add Book</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default HomeScreen;