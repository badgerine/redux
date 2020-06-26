export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADD = 'ADD';
export const SUBTRACT = 'SUBTRACT';
export const STORE_RESULT = 'STORE_RESULT';
export const DELETE_RESULT = 'DELETE_RESULT';

export const increment = () => {
    return {
        type: INCREMENT
    }
};

export const decrement = () => {
    return {
        type: DECREMENT
    }
};

export const add = (amount) => {
    return {
        type: ADD, 
        value: amount
    }
};

export const subtract = (amount) => {
    return {
        type: SUBTRACT,
        value: amount
    }
};

export const storeResult = (value) => {
    return {
        type: STORE_RESULT,
        result: value
    }
};

export const deleteResult = (value) => {
    return {
        type: DELETE_RESULT,
        resultId: value
    }
};
