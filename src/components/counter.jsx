import React, {Component} from "react";

class Counter extends Component {
    state = {
        count : 0,
    }

    constructor(props) {
        super(props);
        console.log('constructor: ', this);
        this.handleIncrement = this.handleIncrement.bind(this);
    }

    render(){
        return (
            <div className='counter-container'>
                <span id='number-label' className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={this.handleIncrement} className='btn btn-sm btn-secondary control'>Increment</button>
                <button onClick={this.handleDecrement} className='btn btn-sm btn-secondary control'>Decrement</button>
            </div>
        );
    }

    formatCount() {
        return this.state.count === 0 ? <h1>Zero</h1> : <h1>{this.state.count}</h1>;
    }

    getBadgeClasses() {
        let classes = 'badge m-2 badge-';
        classes += this.state.count === 0 ? 'warning' : 'primary';
        return classes;
    }



    handleIncrement() {
        console.log('Increment clicked : ', this);
        let x = this.state.count + 1;
        this.setState({count: x});
    }

    handleDecrement = () => {
        console.log('Decrement clicked : ', this);
        let x = this.state.count - 1;
        this.setState({count: x});
    }
}

export default Counter;