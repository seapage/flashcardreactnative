import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Animated } from 'react-native';
import { connect } from 'react-redux';
import { setCurTitle } from '../redux/actionLoadData.js';

class LiPos extends React.Component {

    state={bounceValue: new Animated.Value(1)}

    render() {
        const { bounceValue } = this.state


        return (
                            <View>
                                <TouchableOpacity style={styles.deckListLi} onPress={()=>{
                                    Animated.sequence([
                                                  Animated.timing(bounceValue, { duration: 1000, toValue: 3}),
                                                  Animated.spring(bounceValue, { toValue: 1, friction: 4})
                                                ]).start();
                                    this.props.setTitle(this.props.titleProps,this.props.cardsProps);
                                    setTimeout(()=>{this.props.navigation.navigate('DeckPreview')},1200);
                                }}>

                                              <Animated.Text
                                                style={[styles.deckListLiText, {transform: [{scale: bounceValue}]}]}>
                                                  {this.props.titleProps}
                                              </Animated.Text>
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