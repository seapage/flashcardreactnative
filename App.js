import React from 'react';
import NewDeck from './controllers/addDeck.js';
import DeckTab from './controllers/decksTab.js';
import { StyleSheet, Text, View } from 'react-native';
import { TabNavigator } from 'react-navigation';
import { setLocalNotification } from './notification.js';




//redux power

import { createStore, applyMiddleware} from 'redux';
import StorageBase from "./redux/contenter.js";
import thunk from 'redux-thunk';
import {loadData}from "./redux/actionLoadData.js";
import { Provider } from 'react-redux';


//test


import DeckList from './controllers/deckList.js';
import DeckPreview from './controllers/deckPreview.js';
import Quiz from './controllers/quiz.js';
import Summ from './controllers/summorize.js';
import AddCard from './controllers/addCard.js';
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





const store = createStore(
    StorageBase,
    applyMiddleware(thunk)
);
store.dispatch(loadData());



const Tabulator = TabNavigator({
    DeckTab: {
          routeName: 'DeckTab',
          screen: Stack,
          navigationOptions: {
            tabBarLabel: 'Decks list'
          }
        },
        NewDeck: {
          routeName: 'NewDeck',
          screen: NewDeck,
          navigationOptions: {
            tabBarLabel: 'New deck'
          }
        },
      },



);


export default class App extends React.Component {

    componentDidMount(){
        setLocalNotification();
    }

  render() {
    return (
        <Provider store={store}>
          <Tabulator />
        </Provider>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
