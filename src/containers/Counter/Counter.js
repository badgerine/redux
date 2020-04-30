import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    componentDidUpdate(){
        console.log('[Counter]:componentDidUpdate - ');
        console.log(this.props.storedResults);
    }
        

    render() {
        let result = '';
        if(this.props.storedResults) {
            result = (this.props.storedResults.map(storedResult => (
            <li key={storedResult.id} onClick={() => this.props.onDeleteResult(storedResult.id)}>{storedResult.value}</li>
        )))};

        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter} />
                <CounterControl label="Add 5" clicked={() => this.props.onAddCounter(5)} />
                <CounterControl label="Subtract 5" clicked={() => this.props.onSubtractCounter(5)} />
                <hr/>
                <button onClick={this.props.onStoreResult}>Store result</button>
                <ul>
                    {result}
                </ul>
            </div>
        );
    }
}

//stores a function
const mapStateToProps = (state) => {
    return {
        ctr: state.counter,
        storedResults: state.results
    };
};

const mapDispatchToProps = dispatch => {
    console.log('[Counter:mapDispatchToProps] ... ');
    return {
        onIncrementCounter: () => dispatch({type: actionTypes.INCREMENT}),
        onDecrementCounter: () => dispatch({type: actionTypes.DECREMENT}),
        onAddCounter: (amount) => dispatch({type: actionTypes.ADD, value: amount}),
        onSubtractCounter: (amount) => dispatch({type: actionTypes.SUBTRACT, value: amount}),
        onStoreResult: () => dispatch({type: actionTypes.STORE_RESULT}),
        onDeleteResult: (resultId) => dispatch({type: actionTypes.DELETE_RESULT, resultId: resultId})
    };
};

//connect is a function that returns a function that takes higher order component as a parameter 
export default connect(mapStateToProps, mapDispatchToProps)(Counter); 