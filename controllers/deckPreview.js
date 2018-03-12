import React from 'react';
import { StyleSheet, Text, AppRegistry, View, TextInput, TouchableOpacity,KeyboardAvoidingView } from 'react-native';
import { connect } from 'react-redux';
import { HeaderBackButton } from 'react-navigation';
import { startQuiz } from '../redux/actionLoadData.js';
class DeckPreview extends React.Component {

    constructor(props){
        super(props);
    }

    static navigationOptions = { title: "Quiz"
    };
    render() {



        return (

            <View style={styles.body}>
                <View style={styles.colB}></View>
                <View style={styles.colA}>
                    <KeyboardAvoidingView style={styles.container}>
                        <View style={styles.jd}>

                            <Text style={styles.header}>{this.props.title}{this.props.titled}</Text>
                            <Text style={styles.headerCard}>Cards: {this.props.deck.questions.length}</Text>

                        </View>
                        <View style={styles.jt}>
                            <TouchableOpacity style={styles.button}  onPress={()=>{


                                this.props.navigation.navigate('AddCard',{ title: this.props.deck.title })

                            }}>

                                <Text style={styles.buttonText}>Add Card</Text>

                            </TouchableOpacity>
                            {(this.props.deck.questions.length!=0 &&
                            <TouchableOpacity style={styles.button} onPress={()=>{


                                this.props.startQuiz(this.props.deck.title, this.props.deck.questions.length);
                                this.props.navigation.navigate('Quiz')


                            }}>

                                <Text style={styles.buttonText}>Start Quiz</Text>

                            </TouchableOpacity>)}

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
    headerCard: {
        textAlign: 'center',
        fontSize: 24,
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
        padding: 20,
        marginBottom: 10
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
    deckToReturn={title: "",questions: []};
    state.decks.map((item)=>{

        if(item.title = state.curtitle)
            deckToReturn=item;

    })


    return{
        title: state.curtitle,
        deck: deckToReturn,
        navigate: ownProps.navigation,
        titled: ownProps.name,
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return{
        startQuiz: (title, dl)=>dispatch(startQuiz(title, dl))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeckPreview);