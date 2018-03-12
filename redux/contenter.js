import {AsyncStorage} from 'react-native';
function StorageBase (state = {curtitle: "",decks: [], quiz: {points: 0, questions: 1, actualQuestion: 1, title: ""}}, action) {
    switch(action.type){
        case "LoadData":
            return{
                ...state,
                // quiz: {points: 0, questions: 0, actualQuestion: 1, title: ""},
                // decks: action.data || []
            }
            break;
        case "setCurTitle":
            return{
                ...state,
                curtitle: action.title
                // quiz: {points: 0, questions: 0, actualQuestion: 1, title: ""},
                // decks: action.data || []
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
            // AsyncStorage.setItem(action.title,JSON.stringify({
            //     title: action.title,
            //     questions: [
            //     ]
            // }));

            return {
                ...state,
                decks: [...state.decks,
                    {
                        title: action.title,
                        questions: [
                        ]
                    }
                ]
            }
            break;
        case "SaveCard":
            // AsyncStorage.setItem(action.title,JSON.stringify({
            //     title: action.title,
            //     questions: [
            //         {
            //             question: action.question,
            //             answer: action.answer
            //         }
            //     ]
            // }));

            return {
                ...state,
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
            break;
        default:
            return state;
    }
}
export default StorageBase;