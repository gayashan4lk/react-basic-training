import React, {Component} from "react";

class Card extends Component {
    state = {
        value : this.props.counter.value,
    }

    constructor(props) {
        super(props);
        // console.log('constructor: ', this);
        this.handleIncrement = this.handleIncrement.bind(this);
        this.handleSetZero = this.handleSetZero.bind(this);
    }

    render(){
        // console.log('props : ', this.props);
        // console.log('counter object as props: ', this.props.counter);
        return (
            <div className='card-container'>
                {/*rendering children*/}
                {this.props.children}
                <span id='number-label' className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={this.handleIncrement} className='btn btn-sm btn-success my-btn'>Increment</button>
                <button onClick={this.handleDecrement} className='btn btn-sm btn-secondary my-btn'>Decrement</button>
                <button onClick={this.handleSetZero} className='btn btn-sm btn-warning my-btn'>Set Zero</button>
                <button onClick={() => {this.props.onDelete(this.props.counter.id)}} className="btn btn-danger btn-sm m-2">Delete</button>
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
        // console.log('Increment clicked : ', this);
        let x = this.state.value + 1;
        this.setState({value: x});
    }

    handleDecrement = () => {
        // console.log('Decrement clicked : ', this);
        let x = this.state.value - 1;
        this.setState({value: x});
    }

    handleSetZero() {
        // console.log('SetZero clicked : ', this);
        this.setState({value: 0});
    }
}

export default Card;