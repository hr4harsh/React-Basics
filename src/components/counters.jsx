import React from "react";
import Counter from "./counter";

class Counters extends React.Component {
    render() {
        const {counters, onReset, onDelete, onIncrement} = this.props;
        return (
            <div>
                <button
                    onClick={onReset}
                    className="btn btn-primary btn-sm-2 mb-5"
                >
                Reset
                </button>
                {counters.map((counter) => (
                    <Counter
                        onDelete={onDelete}
                        onIncrement={onIncrement}
                        key={counter.id}
                        counter={counter}
                    />
                ))}
            </div>
        );
    }
}

export default Counters;
