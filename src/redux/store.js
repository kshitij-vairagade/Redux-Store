import { createStore } from "redux"

let initialState = {
    currentScore : 0,
}

const reducer = (state = initialState, action) => {
    let stateCopy = {...state};
    switch (action.type) {
        case "UPDATE_BONUS":
            stateCopy.currentScore += 100
            return stateCopy;

        case "LEVEL_COMPLETED":
            stateCopy.currentScore += 500
            return stateCopy;
        
        case "LIFE_LOST":
            stateCopy.currentScore -= 250
            return stateCopy;
    
        default:
            return stateCopy;
    }
}

const store = createStore(reducer);
export default store;