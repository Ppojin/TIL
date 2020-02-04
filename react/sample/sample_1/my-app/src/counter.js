import React from 'react';

class Counter extends Component {
    render() {
        let state = {
            couter = 0
        };

        return (
            <div>
                <h1>Counter</h1>
                <h1 id="num"></h1>
                <button id="add">+</button>
                <button id="dis">+</button>
            </div>
        );
    };
};

export default Counter