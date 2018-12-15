import React, { Component } from 'react';
class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = { counter: 0 };
    }

    render() {
        return (
            <div>
                Counter: {this.state.counter}
                <button
                    type="button"
                    onClick={() =>
                        // this.setState({ counter: this.state.counter + 1 })
                        this.setState(previousState => ({
                            counter: previousState.counter + 1
                        }))
                    }
                />
            </div>
        );
    }
}

export default Counter;
