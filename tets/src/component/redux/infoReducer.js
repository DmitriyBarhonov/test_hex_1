const ADD_LINK = 'ADD_LINK';

let initialState = {
    id: "uj",
    short: "wd",
    target: "rr",
    counter: "yyy"
}

export const infoReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_LINK: {

            
            return {
                ...state,
                id: "1",
                short: "short",
                target: "target",
                counter: "counter",
            }
        }

        default:
            return state;
    }

}

 export const addDataLinkAC = (id, short, target, counter) => ({
    type: ADD_LINK
    // id,
    // short,
    // target,
    // counter
});




