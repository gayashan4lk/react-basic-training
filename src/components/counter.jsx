import React, {Component} from "react";

class Counter extends Component {
    state = {
        count : 0,
        tags: ['tag1', 'tag2', 'tag3']
    }

    constructor(props) {
        super(props);
        console.log('constructor: ', this);
        this.handleIncrement = this.handleIncrement.bind(this);
        // this.handleDecrement = this.handleDecrement.bind(this);
    }

    render(){
        return (
            <React.Fragment>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={this.handleIncrement} className='btn btn-sm btn-secondary'>Increment</button>
                <button onClick={this.handleDecrement} className='btn btn-sm btn-secondary'>Decrement</button>
                <button onClick={() => this.handlePassingArg({id: 1})} className='btn btn-sm btn-secondary'>Passing Arg</button>
                <ul>
                    {this.state.tags.length === 0 && 'Please create a new tag!'}
                    {this.renderTags()}
                </ul>
            </React.Fragment>
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

    renderTags() {
        if (this.state.tags.length === 0) {
            return <p>There are no tags!</p>;
        } else {
            return this.state.tags.map((tag) => <li key={tag}>{tag}</li>);
        }
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

    handlePassingArg = (product) => {
        console.log(product);
    }
}

export default Counter;