import React, {Component} from "react";
import Counter from "./counter";

class Counters extends Component {
    state = {}

    render() {
        return (
            <div className='counters-main-container'>
                <Counter/>
            </div>
        )
    }
}

export default Counters;