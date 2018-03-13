import React from 'react';
import { StyleSheet, Text, AppRegistry, View, TextInput, TouchableOpacity,KeyboardAvoidingView, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { HeaderBackButton } from 'react-navigation';
import { resetQuiz, wrongAnswer, correctAnswer, corA } from '../redux/actionLoadData.js';

class Quiz extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            test: ""
        }
    }
    static navigationOptions = { title: "Quiz"
    };

    state = {
        showAnswer: false
    }


    switchAnswer(){
        this.setState({
            showAnswer: !this.state.showAnswer
        })
    }

    render() {
        return (
            <View style={styles.body}>
                <View style={styles.colB}>
                    <Text style={styles.header}>{this.props.score.actualQuestion}/{this.props.score.questions}</Text>
                </View>
                <View style={styles.colA}>
                    <KeyboardAvoidingView style={styles.container}>
                        <ScrollView>
                        <View style={styles.jd}>

                            {(this.props.question[(this.props.score.actualQuestion-1)])?(
                                <View style={styles.tekstQue}>
                                    {this.state.showAnswer?(
                                    <Text style={styles.answer}>Answer: {this.props.question[(this.props.score.actualQuestion-1)].answer}</Text>
                                ):(
                                    <Text style={styles.ask}>Question: {this.props.question[(this.props.score.actualQuestion-1)].question}??</Text>
                                )}
                                </View>
                            ):(<Text></Text>)}
                            <TouchableOpacity style={styles.button}  onPress={()=>{


                                this.switchAnswer();

                            }}>

                                <Text style={styles.buttonText}>{(this.state.showAnswer)?('Show question'):('Show answer')}</Text>

                            </TouchableOpacity>

                        </View>
                        <View style={styles.jt}>
                            <TouchableOpacity style={styles.correct}  onPress={()=>{


                                if(this.props.score.actualQuestion==this.props.score.questions){
                                    this.props.corA();
                                    this.props.navigation.navigate('Summ');
                                    return;
                                }

                                this.props.correctAnswer();


                            }}>

                                <Text style={styles.buttonText}>Correct answer</Text>

                            </TouchableOpacity>
                            <TouchableOpacity style={styles.incorrect}  onPress={()=>{


                                if(this.props.score.actualQuestion==this.props.score.questions){
                                    this.props.navigation.navigate('Summ');
                                    return;
                                }
                                this.props.wrongAnswer();


                            }}>

                                <Text style={styles.buttonText}>Incorect answer</Text>

                            </TouchableOpacity>

                        </View>
                        <View style={styles.jt}></View>
                            </ScrollView>
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
        flex: 3,
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
    incorrect:{
        backgroundColor: '#d10000',
        padding: 20,
        marginBottom: 10
    },
    correct:{
        backgroundColor: '#03a325',
        padding: 20,
        marginBottom: 10
    },
    buttonText:{
        color: '#ffffff',
        textAlign: 'center'
    },
    ask:{
        color: '#000',
        fontSize: 20
    },
    answer:{
        color: '#47cc00',
        fontSize: 20
    },
    jt:{
        flex: 1,
    },
    jd:{
        flex: 2,
        justifyContent: 'center',
    },
    tekstQue:{
        minHeight: 35,
        paddingTop: 20,
        justifyContent: 'center',
    }
});

const mapStateToProps = (state, ownProps)=>{
    questions=[];
    state.curCards.map((item)=>{
        questions.push(item);

    })
    return{
        question: questions || [],
        score: state.quiz || {points: 0, questions: 0, actualQuestion: 1, title: ""}
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return{
        resetQuiz: ()=>dispatch(resetQuiz()),
        correctAnswer: ()=>dispatch(correctAnswer()),
        wrongAnswer: ()=>dispatch(wrongAnswer()),
        corA: ()=>dispatch(corA())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);