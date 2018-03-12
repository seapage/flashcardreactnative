import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { setCurTitle } from '../redux/actionLoadData.js';


class DeckList extends React.Component {
    static navigationOptions = { header: null };
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.deckList}><Text style={styles.headerDeck}>Select your deck</Text></View>
                <View style={styles.deckListd}>


                    <ScrollView>

                        <Text>{this.props.length}</Text>
                        {this.props.decks.map((item)=>(
<View key={item.title}>
    <Text style={styles.deckListLiText}>{item.title}</Text>
                            <TouchableOpacity style={styles.deckListLi} onPress={()=>{

                                this.props.setTitle(item.title);
                                this.props.navigation.navigate('DeckPreview');

                            }}>

                                <Text style={styles.deckListLiText}>{item.title}</Text>
                                <Text style={styles.deckListLiCardsNumber}>{item.questions.length} Cards</Text>


                            </TouchableOpacity></View>
                        ))}
                        </ScrollView>

                </View>
        </View>
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
        setTitle: (text)=>dispatch(setCurTitle(text))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeckList);