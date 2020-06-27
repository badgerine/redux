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

export const syncronousStoreResult = (value) => {
    return {
        type: STORE_RESULT,
        result: value
    }
}

const fetchSauce = () => {
    const response = fetch("https://cors-anywhere.herokuapp.com/https://www.google.com/search?q=secret+sauce");
    console.log(response);
    return response;
}

export const asyncStoreResult = (value) => {
    return thunkDispatch => {

        // setTimeout(() => {
        //     console.log("timeout done...")
        //     thunkDispatch(syncronousStoreResult(value));
        // }, 4000);

        fetchSauce().then(response => {
            const reader = response.body.getReader().read()
                .then(result => {
                    console.log(new TextDecoder("utf-8").decode(result.value));
                });
        }).catch(rejection => {
            console.error('error: ' + rejection);
        });

        thunkDispatch(syncronousStoreResult(value));
    };
}

export const storeResult = (value) => {
    return asyncStoreResult(value);
};

export const deleteResult = (value) => {
    return {
        type: DELETE_RESULT,
        resultId: value
    }
};
