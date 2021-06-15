import React, {Component} from "react";

class Counter extends Component {
    state = {
    }

    render() {
        return (
            <div className='counter-container'>
                <span className="badge badge-primary m-2">zero</span>
                <button className="btn btn-sm btn-warning m-2">Increment</button>
            </div>
        );
    }
}

export default Counter;