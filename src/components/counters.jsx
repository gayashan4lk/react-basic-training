import React, {Component} from "react";
import Counter from "./counter";

class Counters extends Component {
    state = {
        counters: [
            {id : 1, value: 4, title: 'Gayashan'},
            {id : 4, value: 25, title: 'Wagachchi'},
            {id : 5, value: 36, title: 'Bhagya'},
            {id : 6, value: 100, title: 'Arunodanie'}
        ]
    }
    render() {
        return (
            <div>
                {this.state.counters.map(counter =>
                    <Counter key={counter.id} value={counter.value} selected={true}>
                        {/*passing children*/}
                        <h4>{counter.title}</h4>
                    </Counter>
                )}
            </div>
        );
    }
}

export default Counters;