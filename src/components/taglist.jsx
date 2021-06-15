import React, {Component} from "react";

class TagList extends Component {
    state = {
        tags: ['tag1', 'tag2', 'tag3']
    }

    render() {
        return (
            <div className='tag-list-container'>
                <button onClick={() => this.handlePassingArg({id: 1})} className='btn btn-sm btn-secondary control'>Passing Arg</button>
                <ul>
                    {this.state.tags.length === 0 && 'Please create a new tag!'}
                    {this.renderTags()}
                </ul>
            </div>
        );
    }

    renderTags() {
        if (this.state.tags.length === 0) {
            return <p>There are no tags!</p>;
        } else {
            return this.state.tags.map((tag) => <li key={tag}>{tag}</li>);
        }
    }

    handlePassingArg = (product) => {
        console.log('product : ', product);
        // console.log(JSON.stringify(product));
    }
}

export default TagList;