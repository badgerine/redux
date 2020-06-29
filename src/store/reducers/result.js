import * as actionTypes from '../actions/actionTypes';

const initialState = {
    results: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({ id: new Date(), value: action.result })//returns new array
            }
        case actionTypes.DELETE_RESULT:
            return deleteResult();
    }
    return state;
};

const deleteResult = (state, action) => {
    const updatedResults = state.results.filter(result => (result.id !== action.resultId));
    return updateObject(state, {results: updatedResults});
}

export default reducer;