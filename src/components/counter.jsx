import React, {Component} from "react";

class Counter extends Component {
    state = {
        count : 1,
        tags: ['tag1', 'tag2', 'tag3']
    }
    render(){
        return (
            <React.Fragment>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button className='btn btn-sm btn-secondary'>Increment</button>
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
}

export default Counter;