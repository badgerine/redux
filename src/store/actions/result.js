import * as actionTypes from './actionTypes';

export const storeResult = (value) => {
    return asyncStoreResult(value);
};

export const deleteResult = (value) => {
    return {
        type: actionTypes.DELETE_RESULT,
        resultId: value
    }
};

const syncronousStoreResult = (value) => {
    return {
        type: actionTypes.STORE_RESULT,
        result: value
    }
}

const fetchSauce = () => {
    const response = fetch("https://cors-anywhere.herokuapp.com/https://www.google.com/search?q=secret+sauce");
    console.log(response);
    return response;
}

const asyncStoreResult = (value) => {
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