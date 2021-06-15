import React, {Component} from "react";

class Counter extends Component {
    render() {
        return (
            <div className='counter-container'>
                <span className={this.getBadgeClasses()}><h4>{this.formatCount()}</h4></span>
                <button onClick={() => {this.props.onIncrement(this.props.counter)}} className="btn btn-sm btn-success m-1">
                    <i className="fa fa-plus fa-lg" aria-hidden="true"> </i>
                </button>
                <button onClick={() => {this.props.onDecrement(this.props.counter)}} className="btn btn-sm btn-secondary m-1">
                    <i className="fa fa-minus fa-lg" aria-hidden="true"> </i>
                </button>
                <button onClick={() => {this.props.onDelete(this.props.counter.id)}} className="btn btn-sm btn-danger m-1">
                    <i className="fa fa-times fa-lg" aria-hidden="true"> </i>
                </button>
            </div>
        );
    }

    formatCount() {
        return this.props.counter.value === 0 ? "Zero" : this.props.counter.value;
    }

    getBadgeClasses() {
        let classes = "badge m-3 badge-";
        classes += this.props.counter.value === 0 ? 'warning' : 'primary';
        return classes;
    }

}

export default Counter;