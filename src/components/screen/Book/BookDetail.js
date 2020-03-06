import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class ProductDetail extends Component{
    static navigationOptions = {
        title: "Book Details"
    };
    render(){
        return(
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Details Screen</Text>
                <Button title="Go to back Profile" onPress={() => this.props.navigation.navigate('Profile', {
                    name: "Kuhaku"
                })}></Button>
            </View>
        )
    }
}

export default ProductDetail;