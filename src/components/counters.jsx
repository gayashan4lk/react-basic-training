import React, {Component} from "react";
import Counter from "./counter";

class Counters extends Component {
    render() {
        return (
            <div className='counters-main-container'>
                <h5><b>Single source of truth</b></h5>
                <hr/>
                <button
                    onClick={this.props.onReset}
                    className="btn btn-primary btn-sm m-2"><h5><b>Reset</b></h5></button>
                {this.props.counters.map(counter => (
                    <Counter
                        key={counter.id}
                        onDelete={this.props.onDelete}
                        onIncrement={this.props.onIncrement}
                        onDecrement={this.props.onDecrement}
                        counter={counter}
                    />
                ))}
            </div>
        )
    }
}

export default Counters;