import React, {Component} from "react";
import Counter from "./counter";

class Counters extends Component {
    state = {
        counters: [
            {id : 1, value: 0},
            {id : 4, value: 0},
            {id : 5, value: 0},
            {id : 6, value: 0}
        ]
    }
    render() {
        return (
            <div>
                {this.state.counters.map(counter => <Counter key={counter.id} />)}
            </div>
        );
    }
}

export default Counters;