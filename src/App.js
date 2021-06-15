import React, {Component} from "react";
import Cards from "./components/cards";
import TagList from "./components/taglist";
import Counters from "./components/counters";
import NavBar from "./components/navbar";
import './App.css';

class App extends Component {
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
            <React.Fragment>
                <NavBar
                    totalCounters={this.state.counters.filter(c => c.value > 0).length}
                />
                <main className="container">
                    <Counters
                        counters={this.state.counters}
                        onReset={this.handleReset}
                        onIncrement={this.handleIncrement}
                        onDecrement={this.handleDecrement}
                        onDelete={this.handleDelete}
                        />
                    <hr className='m-4'/>
                    <Cards/>
                    <TagList/>
                </main>
            </React.Fragment>
        );
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

    handleIncrement = (counter) => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = {...counter};
        counters[index].value++;
        this.setState({counters:counters});
    }

    handleDecrement = counter => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = {...counter};
        counters[index].value--;
        this.setState({counters:counters});
    }

}

export default App;
