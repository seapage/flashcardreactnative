import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { setCurTitle } from '../redux/actionLoadData.js';

class LiPos extends React.Component {
    render() {
        return (
                            <View>
                                <TouchableOpacity style={styles.deckListLi} onPress={()=>{
                                    this.props.setTitle(this.props.titleProps,this.props.cardsProps);
                                    this.props.navigation.navigate('DeckPreview')}

                                }>

                                    <Text style={styles.deckListLiText}>{this.props.titleProps}</Text>
                                    <Text>{this.props.cardsProps.length} Cards</Text>


                                </TouchableOpacity></View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    deckList:{
        backgroundColor: '#02b3e4',
        paddingTop: 15,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    deckListd:{
        flex: 8
    },
    deckListLi:{
        alignItems: 'center',
        justifyContent: 'center',
        height: 80,
        borderBottomWidth: 1,
        borderStyle: 'solid',
        borderColor: '#ccc',
    },
    deckListLiText:{
        fontSize: 20
    },
    headerDeck:{
        color: '#fff',
        fontSize: 24
    }
});



const mapStateToProps = (state, ownProps)=>{
    return ({
        decks: state.decks || []
    });
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return{
        setTitle: (text, cards)=>dispatch(setCurTitle(text, cards))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LiPos);