export const loadData = (data) => {
    return {
        type: 'LoadData',
        data
    }
}


export const saveDeck = (title) => {
    return {
        type: 'SaveDeck',
        title
    }
}

export const setCurTitle = (title) => {
    return {
        type: 'setCurTitle',
        title: title
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
export const corA = () => {
    return {
        type: 'corA'
    }
}

export const getData = () => dispatch => {


    // AsyncStorage.getAllKeys((key))
    //
    //
    // ((err, keys) => {
    //     AsyncStorage.multiGet(keys, (err, stores) => {
    //         var obj = [];
    //         stores.map((result, i, store) => {
    //             // get at each store's key/value so you can work with it
    //             let key = store[i][0];
    //             let value = JSON.parse(store[i][1]);
    //             obj[key]=value
    //         });
    //         dispatch(loadData(obj))
    //
    //
    //     });
    // });

    AsyncStorage.getAllKeys((err, keys) => {
        AsyncStorage.multiGet(keys, (err, stores) => {
            let arr = [];
            stores.map((result, i, store) => {
                // get at each store's key/value so you can work with it
                arr[store[i][0]]=store[i][1];
            });
            dispatch(loadData(arr))
        });
    });
}