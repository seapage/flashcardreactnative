export const loadData = (data) => {
    return {
        type: 'LoadData',
        data
    }
}


export const saveDeck = (title) => {
    return {
        type: 'SaveDeck',
        titleVar: title
    }
}

export const setCurTitle = (title, cards) => {
    return {
        type: 'setCurTitle',
        title: title,
        actualCards: cards
    }
}

export const saveCard = (title, question, answer) => {
    return {
        type: 'SaveCard',
        title: title,
        question: question,
        answer: answer
    }
}

export const wrongAnswer = () => {
    return {
        type: 'wrongAnswer'
    }
}
export const correctAnswer = () => {
    return {
        type: 'correctAnswer'
    }
}
export const startQuiz = (title, dl) => {
    return {
        type: 'startQuiz',
        title,
        dl
    }
}
export const resetQuiz = () => {
    return {
        type: 'ResetQuiz'
    }
}
export const resetQuizD = () => {
    return {
        type: 'ResetQuizD'
    }
}
export const corA = () => {
    return {
        type: 'corA'
    }
}

export const getData = () => dispatch => {


    AsyncStorage.getItem("ourstate").fetch((response)=>{dispatch(loadData(JSON.parse(response)))})


}