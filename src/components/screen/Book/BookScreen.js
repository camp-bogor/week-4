import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Image, Text, FlatList, TouchableOpacity } from 'react-native';

import Spinner from '../Spinner/Spinner';

import { getBooks } from '../../redux/actions/books';

class Book extends Component{

    static navigationOptions = ({ navigation }) => {
        return{
            headerRight: () => (
                <TouchableOpacity 
                        style={{ backgroundColor: '#1C3F94', padding: 8, justifyContent: 'center', alignItems: 'center', width: 100, marginRight: 20}}
                        onPress={() => navigation.navigate('AddBook')}>
                            <Text style={{ color: "#fff" }}>Add Book</Text>
                </TouchableOpacity>
            ),
        }
    }

    componentDidMount(){
        this.getBook();
    }

    async getBook(){
        await this.props.dispatch(getBooks());
    }

    onRefreshing = () => {
        this.getBook();
    }

    renderRow = ({item}) => {
        return(
            <View style={{ flex: 1, flexDirection: 'row', marginBottom: 10, borderBottomWidth:1, borderBottomColor: "rgba(0,0,0,.1)", height: 110 }}>
                <Image source={{uri: "https://inc.mizanstore.com/aassets/img/com_cart/produk/mudah-membuat-dan-berbisnis-aplikasi-android-dengan-android-stud.jpg", width: 100, height: 100}} />
                <View style={{ flex: 1, flexDirection: 'column' }}>
                    <Text style={{ fontSize: 18, marginLeft: 10, marginBottom: 5 }}>{item.name}</Text>
                    <Text style={{ fontSize: 15, marginLeft: 10, marginBottom: 18 }}>Stock {item.stock}</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity style={{ marginLeft: 10 }} onPress={() => this.props.navigation.navigate('EditBook', {
                            book: item
                        })}>
                            <Text style={{ fontSize: 17, color: "orange" }}>Edit</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ marginLeft: 10 }}>
                            <Text style={{ fontSize: 17, color: "red" }}>Delete</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }

    render(){
        const {books} = this.props;

        return(
            <View>
                <Spinner isLoading={books.isLoading} />
                <View style={{ marginTop: 10, marginLeft: 10, marginBottom: 10 }}>
                    <FlatList 
                        data={books.books}
                        renderItem={this.renderRow}
                        refreshing={books.isLoading}
                        onRefresh={this.onRefreshing}
                        keyExtractor={(item) => item.id.toString()}
                    />
                </View>
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