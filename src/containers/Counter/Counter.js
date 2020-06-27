import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/index';

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
                <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store result</button>
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
        ctr: state.counter.counter,
        storedResults: state.result.results
    };
};

const mapDispatchToProps = dispatch => {
    console.log('[Counter:mapDispatchToProps] ... ');
    return {
        onIncrementCounter: () => dispatch(actionCreators.increment()),
        onDecrementCounter: () => dispatch(actionCreators.decrement()),
        onAddCounter: (amount) => dispatch(actionCreators.add(amount)),
        onSubtractCounter: (amount) => dispatch(actionCreators.subtract(amount)),
        onStoreResult: (val) => dispatch(actionCreators.storeResult(val)),
        onDeleteResult: (resultId) => dispatch(actionCreators.deleteResult(resultId))
    };
};

//connect is a function that returns a function that takes higher order component as a parameter 
export default connect(mapStateToProps, mapDispatchToProps)(Counter); 