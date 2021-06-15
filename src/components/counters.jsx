import React, {Component} from "react";
import Counter from "./counter";

class Counters extends Component {
    state = {
        counters: [
            {id : 0, value: 12, title: 'Gayashan'},
            {id : 1, value: 5, title: 'Wagachchi'},
            {id : 1458, value: 9, title: 'Bhagya'},
            {id : 3664, value: 10, title: 'Arunodanie'}
        ]
    }

    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
    }

    render() {
        return (
            <div>
                {this.state.counters.map(counter =>
                    /*<Counter key={counter.id} onDelete={this.handleDelete} id={counter.id} value={counter.value} selected={true} >
                        {/!*passing children*!/}
                        <h5>Id : {counter.id} , Name : {counter.title}</h5>
                    </Counter>*/

                    // Passing all the counter object as props
                    <Counter key={counter.id} counter={counter} onDelete={this.handleDelete}>
                        {/*passing children*/}
                        <h5>Id : {counter.id} , Name : {counter.title}</h5>
                    </Counter>
                )}
            </div>
        );
    }

    handleDelete(counterID) {
        console.log('event handler called', counterID);
        const counters = this.state.counters.filter(c => c.id !== counterID);
        this.setState({counters:counters});
    }

}

export default Counters;