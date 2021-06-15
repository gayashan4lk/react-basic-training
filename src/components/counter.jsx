import React, {Component} from "react";

class Counter extends Component {
    state = {
        value: this.props.counter.value
    };

    render() {
        return (
            <div className='counter-container'>
                <span className={this.getBadgeClasses()}><h4>{this.formatCount()}</h4></span>
                <button onClick={this.handleIncrement} className="btn btn-sm btn-success m-1">
                    <i className="fa fa-plus fa-lg" aria-hidden="true"> </i>
                </button>
                <button onClick={this.handleDecrement} className="btn btn-sm btn-secondary m-1">
                    <i className="fa fa-minus fa-lg" aria-hidden="true"> </i>
                </button>
                <button onClick={() => {this.props.onDelete(this.props.counter.id)}} className="btn btn-sm btn-danger m-1">
                    <i className="fa fa-times fa-lg" aria-hidden="true"> </i>
                </button>
            </div>
        );
    }

    handleIncrement = () => {
        this.setState({value:this.state.value + 1});
    };

    handleDecrement = () => {
        this.setState({value:this.state.value - 1});
    }

    formatCount() {
        return this.state.value === 0 ? "Zero" : this.state.value;
    }

    getBadgeClasses() {
        let classes = "badge m-3 badge-";
        classes += this.state.value === 0 ? 'warning' : 'primary';
        return classes;
    }

}

export default Counter;