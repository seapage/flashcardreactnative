import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import LiPos from './listPos.js';


class DeckList extends React.Component {
    static navigationOptions = { header: null };
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.deckList}><Text style={styles.headerDeck}>Select your deck</Text></View>
                <View style={styles.deckListd}>


                    <ScrollView>
                        {(this.props.decks.length == 0) ? (

                            <Text style={styles.deckListLiText}>No decks, let's add some</Text>

                        ):(
                        this.props.decks.map((item)=>(
                            <View key={item.title} >
                                <LiPos titleProps={item.title} cardsProps={item.questions} navigation={this.props.navigation}/>
                            </View>
                        )))}
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