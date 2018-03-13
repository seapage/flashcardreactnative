import {AsyncStorage} from 'react-native';
function StorageBase (state = {curtitle: "", curCards:[], decks: [], quiz: {points: 0, questions: 1, actualQuestion: 1, title: ""}}, action) {
    switch(action.type){
        case "LoadData":
            return{
                ...state
            }
            break;
        case "setCurTitle":
            return{
                ...state,
                curtitle: action.title,
                curCards: action.actualCards
            }
            break;
        case "ResetQuiz":
            return{
                ...state,
                quiz: {points: 0, questions: 0, actualQuestion: 1, title: ""}
            }
            break;
        case "startQuiz":
            return{
                ...state,
                quiz: {points: 0, questions: action.dl, actualQuestion: 1, title: action.title}
            }
            break;
        case "correctAnswer":
            return{
                ...state,
                quiz: {
                    ...state.quiz,
                    points: state.quiz.points+1,
                    actualQuestion: state.quiz.actualQuestion+1
                }
            }
            break;
        case "corA":
            return{
                ...state,
                quiz: {
                    ...state.quiz,
                    points: state.quiz.points+1
                }
            }
        case "wrongAnswer":
            return{
                ...state,
                quiz: {
                    ...state.quiz,
                    actualQuestion: state.quiz.actualQuestion+1
                }
            }
            break;
        case "SaveDeck":


            var array = state.decks.map((item)=>{

                return item;
            });
            array.push({
                title: action.titleVar,
                questions: [
                ]
            })

            let tempState = {
                ...state,
                curtitle: action.titleVar,
                decks: array,
                curCards: []
            }
            AsyncStorage.setItem("ourstate",JSON.stringify(tempState));

            return tempState;

            break;
        case "SaveCard":
            let tempStatea = {
                ...state,
                curCards:[
                    ...state.curCards,
                    {
                        question: action.question,
                        answer: action.answer
                    }
                ],
                decks: state.decks.map((item)=>{
                    if(item.title === action.title)
                        return{
                            title: item.title,
                            questions: [
                                ...item.questions,
                                {
                                    question: action.question,
                                    answer: action.answer
                                }
                            ]
                        }
                    return item;
                })
            }
            AsyncStorage.setItem("ourstate",JSON.stringify({
                tempStatea
            }));

            return tempStatea;
            break;
        default:
            return state;
    }
}
export default StorageBase;