import React from 'react';
import { StyleSheet, Text, AppRegistry, View, TextInput, TouchableOpacity,KeyboardAvoidingView } from 'react-native';
import { connect } from 'react-redux';
import { HeaderBackButton } from 'react-navigation';
import {Keyboard} from 'react-native'
import { resetQuiz } from '../redux/actionLoadData.js';

class Summ extends React.Component {

    static navigationOptions = ({ navigation, screenProps }) => ({
    title:  'Quiz',
    headerLeft:  <TouchableOpacity onPress={ () => {navigation.navigate('DeckList') } } ><Text>Deck lists</Text></TouchableOpacity>,
        });



    render() {


        return (
            <View style={styles.body}>
                <View style={styles.colB}></View>
                <View style={styles.colA}>
                    <KeyboardAvoidingView style={styles.container}>
                        <View style={styles.jd}>

                            <Text style={styles.header}>{(this.props.score.points/this.props.score.questions*100).toFixed(2)} %</Text>
                            <Text style={styles.header}>You answer correctly: {this.props.score.points} in {this.props.score.questions} questions</Text>

                        </View>
                        <View style={styles.jt}>
                            <TouchableOpacity style={styles.button} onPress={() =>{this.props.resetQuiz(); this.props.navigation.navigate('DeckPreview')}}>

                                <Text style={styles.buttonText}>Reset quiz</Text>

                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button} onPress={() =>{this.props.resetQuiz(); this.props.navigation.navigate('DeckPreview')}}>

                                <Text style={styles.buttonText}>Back to Quiz list</Text>

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
        backgroundColor: '#fff'

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
})

const mapStateToProps = (state, ownProps)=>{
    return{
        score: state.quiz,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return{
        resetQuiz: ()=>dispatch(resetQuiz()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Summ);