import React from "react"
import { useState, Component } from "react";
import './css/button.css';

function CounterUsingFunction() {

    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count + 1);
    }

    const handleDecrement = () => {
        setCount(count - 1);
    }

    return (
        <div className='counter'>
            <h1 class='counter-display'>Function Counter</h1>
            <h2 className='counter-display'>The count is: {count}</h2>
            <div class='btn-container'>
                <button id='increment-button' className='btn btn-increment' onClick={handleIncrement}>Increase</button>
                <button type='button' id='decrement-button' className='btn btn-decrement' onClick={handleDecrement}>Decrease</button>
            </div>
        </div>
    )
}

class CounterUsingClass extends Component{
    constructor() {
        super();
        this.state = {
            count: 0
        };
    }

    incrementCounter() {
        this.setState({
            count: this.state.count + 1
        });
    }

    decrementCounter() {
        this.setState({
            count: this.state.count - 1
        });
    }

    render() {
        return (
            <div class='counter'>
                <h1 className='counter-display'>Class Counter</h1>
                <h2 class='counter-display'>The count is: {this.state.count}</h2>
                <div className='btn-container'>
                    <button className='btn btn-increment' onClick={() => this.incrementCounter()}>Increment</button>
                    <button className='btn btn-decrement' onClick={() => this.decrementCounter()}>Decrement</button>
                </div>
            </div>
        );
    }
}

export {
    CounterUsingFunction,
    CounterUsingClass
};
