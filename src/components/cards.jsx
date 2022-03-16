import React, {Component} from "react";
import Card from "./card";

class Cards extends Component {
    state = {
        counters: [
            {id : 0, value: 12, title: 'One'},
            {id : 1, value: 5, title: 'Two'},
            {id : 1458, value: 9, title: 'Three'},
            {id : 3664, value: 10, title: 'Four'}
        ]
    }

    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
    }

    render() {
        return (
            <div className='cards-main-container'>
                {this.state.counters.map(counter =>
                    /*<Card key={counter.id} onDelete={this.handleDelete} id={counter.id} value={counter.value} selected={true} >
                        {/!*passing children*!/}
                        <h5>Id : {counter.id} , Name : {counter.title}</h5>
                    </Card>*/

                    // Passing all the counter object as props
                    <Card key={counter.id} counter={counter} onDelete={this.handleDelete}>
                        {/*passing children*/}
                        <h5>Id : {counter.id} , Name : {counter.title}</h5>
                    </Card>
                )}
            </div>
        );
    }

    handleDelete(counterID) {
        // console.log('event handler called', counterID);
        const counters = this.state.counters.filter(c => c.id !== counterID);
        this.setState({counters:counters});
    }

}

export default Cards;