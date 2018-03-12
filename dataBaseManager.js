import React from 'react';
import {AsyncStorage} from 'react-native';


export default class DataBaseManager{

    body = {};

    constructor(){
        this.body = AsyncStorage.getItem('Decks');
    }

     getDecks(){
        return this.body;

    }
     getDeck(id){
        var temp = this.body;
        return false;

    }
     saveDeckTitle(title){
         this.body = {
             ...this.body,
             [title] : {
                 title: title,
                 questions: [
                 ]
             },
         };
         AsyncStorage.setItem('Decks',this.body)

     }



     addCardToDeck(){

         var temp = body;


    }
}
