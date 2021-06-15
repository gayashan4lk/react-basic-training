import React, {Component} from "react";
import Counter from "./counter";

class Counters extends Component {
    state = {
        counters: [
            {id: 1, value: 0},
            {id: 2, value: 1},
            {id: 3, value: 3},
            {id: 4, value: 5}
        ]
    };

    render() {
        return (
            <div className='counters-main-container'>
                <h5><b>Single source of truth</b></h5>
                <hr/>
                <button
                    onClick={this.handleReset}
                    className="btn btn-primary btn-sm m-2"><h5><b>Reset</b></h5></button>
                {this.state.counters.map(counter => (
                    <Counter
                        key={counter.id}
                        onDelete={this.handleDelete}
                        counter={counter}
                    />
                ))}
            </div>
        )
    }

    handleReset = () => {
        const counters = this.state.counters.map(c => {
            c.value = 0;
            return c;
        });
        this.setState({counters: counters})
    };

    handleDelete = (counterID) => {
        const counters = this.state.counters.filter(c => c.id !== counterID);
        this.setState({counters: counters});
    };
}

export default Counters;