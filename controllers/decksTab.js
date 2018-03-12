import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import DeckList from '../controllers/deckList.js';
import DeckPreview from '../controllers/deckPreview.js';
import Quiz from '../controllers/quiz.js';
import Summ from '../controllers/summorize.js';
import AddCard from '../controllers/addCard.js';
import { StackNavigator } from 'react-navigation';

const Stack = StackNavigator({
    DeckList: {
        screen: DeckList,
    },
    DeckPreview: {
         screen: DeckPreview
    },
    AddCard: {
         screen: AddCard
    },
    Quiz: {
         screen: Quiz
    },
    Summ: {
         screen: Summ
    }
})


class DeckTab extends React.Component {
    render() {
        return (
            <Stack/>
        );
    }
}

const mapStateToProps = (state, ownProps)=>{
    return {}
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return{

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeckTab);