import React, {Component} from "react";

class Counter extends Component {
    state = {
        value : this.props.value,
    }

    constructor(props) {
        super(props);
        console.log('constructor: ', this);
        this.handleIncrement = this.handleIncrement.bind(this);
        this.handleSetZero = this.handleSetZero.bind(this);
    }

    render(){
        console.log('props : ', this.props);
        return (
            <div className='counter-container'>
                {/*rendering children*/}
                {this.props.children}
                <span id='number-label' className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={this.handleIncrement} className='btn btn-sm btn-secondary my-btn'>Increment</button>
                <button onClick={this.handleDecrement} className='btn btn-sm btn-secondary my-btn'>Decrement</button>
                <button onClick={this.handleSetZero} className='btn btn-sm btn-secondary my-btn'>Set Zero</button>
            </div>
        );
    }

    formatCount() {
        return this.state.value === 0 ? <h1>Zero</h1> : <h1>{this.state.value}</h1>;
    }

    getBadgeClasses() {
        let classes = 'badge m-0 badge-';
        classes += this.state.value === 0 ? 'warning' : 'primary';
        return classes;
    }

    handleIncrement() {
        console.log('Increment clicked : ', this);
        let x = this.state.value + 1;
        this.setState({value: x});
    }

    handleDecrement = () => {
        console.log('Decrement clicked : ', this);
        let x = this.state.value - 1;
        this.setState({value: x});
    }

    handleSetZero() {
        console.log('SetZero clicked : ', this);
        this.setState({value: 0});
    }
}

export default Counter;