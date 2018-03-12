import React from 'react';
import { StyleSheet, Text, AppRegistry, View, TextInput, TouchableOpacity,KeyboardAvoidingView } from 'react-native';
import { connect } from 'react-redux';
import { saveDeck } from '../redux/actionLoadData.js';
import {Keyboard} from 'react-native'

class NewDeck extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            test: ""
        }
    }

    saveTitle(){
        Keyboard.dismiss();
        if(this.state.text==""||this.state.text==null)
            return;
        this.props.saveTitle(this.state.text);
        this.setState({

            text: ""

        })
        this.props.navigation.navigate('DeckTab')
    }

    render() {
        return (
            <View style={styles.body}>
                <View style={styles.colB}></View>
                <View style={styles.colA}>
                        <KeyboardAvoidingView style={styles.container}>
                            <View style={styles.jd}>

                                <Text style={styles.header}>What is a title of your deck?</Text>

                            </View>
                            <View style={styles.jt}>

                                <TextInput
                                    style={styles.form}
                                    editable = {true}
                                    maxLength = {40}
                                    placeholder="Put your topic here"
                                    onChangeText={(text) => this.setState({text})}
                                    value={this.state.text}
                                />

                            </View>
                            <View style={styles.jt}>
                                <TouchableOpacity style={styles.button} onPress={()=>{

                                    this.props.decks.map((item)=>{console.log("poz"+item.title)})

                                    this.saveTitle()}}>

                                    <Text style={styles.buttonText}>Create new deck</Text>

                                </TouchableOpacity>

                            </View>
                            <View style={styles.jt}></View>
                        </KeyboardAvoidingView>
                </View>
                <View style={styles.colB}></View>
            </View>)
    }
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',

    },
    colA:{
        flex: 5,
    },
    colB:{
        flex: 1,
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',

    },
    header: {
        textAlign: 'center',
        fontSize: 32,
    },
    form: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#000000',
        padding: 14,
        borderRadius: 5,
        fontSize: 22
    },
    button:{
        backgroundColor: '#02b3e4',
        padding: 20
    },
    buttonText:{
        color: '#ffffff',
        textAlign: 'center'
    },
    jt:{
        flex: 1,
    },
    jd:{
        flex: 2,
        justifyContent: 'center',
    }
});

const mapStateToProps = (state, ownProps)=>{
    return ({
        decks: state.decks || []
    });
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return{
        saveTitle: (title)=>dispatch(saveDeck(title))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewDeck);