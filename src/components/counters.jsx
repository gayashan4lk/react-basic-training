import React, {Component} from "react";
import Counter from "./counter";

class Counters extends Component {
    state = {
        counters: [
            {id : 1, value: 4},
            {id : 4, value: 25},
            {id : 5, value: 36},
            {id : 6, value: 100}
        ]
    }
    render() {
        return (
            <div>
                {this.state.counters.map(counter =>
                    <Counter key={counter.id} value={counter.value} selected={true} />)}
            </div>
        );
    }
}

export default Counters;