import React from 'react';
import { StyleSheet, Text, AppRegistry, View, TextInput, TouchableOpacity,KeyboardAvoidingView , ScrollView} from 'react-native';
import { connect } from 'react-redux';
import { saveCard } from '../redux/actionLoadData.js';
import {Keyboard} from 'react-native'

class AddCard extends React.Component {

    static navigationOptions = { title: "Add card"};

    constructor(props){
        super(props);
        this.state = {
            testt: "",
            textanswer: ""
        }
    }

    saveCard(){
        Keyboard.dismiss();
        if(this.state.textt==""||this.state.textt==null)
            return;
        if(this.state.textanswer==""||this.state.textanswer==null)
            return;
        this.props.saveCard(this.props.title, this.state.textt, this.state.textanswer);
        this.setState({

            textt: "",
            textanswer: ""

        })
        this.props.navigation.navigate('DeckPreview')
    }

    render() {
        return (
            <View style={styles.body}>
                <View style={styles.colB}></View>
                <View style={styles.colA}>
                        <KeyboardAvoidingView style={styles.container}>
                            <View style={styles.jd}>

                                <Text style={styles.header}>Add card to list</Text>

                            </View>
                            <ScrollView>
                            <View style={styles.jt}>

                                <TextInput
                                    style={styles.form}
                                    editable = {true}
                                    maxLength = {40}
                                    placeholder="Question"
                                    onChangeText={(textt) => this.setState({textt})}
                                    value={this.state.textt}
                                />
                                <TextInput
                                    style={styles.form}
                                    editable = {true}
                                    maxLength = {120}
                                    placeholder="Answer"
                                    onChangeText={(textanswer) => this.setState({textanswer})}
                                    value={this.state.textanswer}
                                />


                            </View>
                            </ScrollView>
                            <View style={styles.jt}>
                                <TouchableOpacity style={styles.buttonn} onPress={()=>{this.saveCard()}}>

                                    <Text style={styles.buttonText}>Create new card</Text>

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
        backgroundColor: '#fff',
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
        fontSize: 22,
        marginBottom: 10
    },
    buttonn:{
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
    return{
        title: state.curtitle,
        curCard: state.curCard || [],
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return{
        saveCard: (title, question, answer)=>dispatch(saveCard(title, question, answer))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCard);