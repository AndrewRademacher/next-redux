import * as React from 'react';
import { connect } from 'react-redux';
import { ActionType, CounterStore } from '../../store';

export interface Props {
    counter: CounterStore
    dispatch: any
}

interface State {
    value: number
}

class CounterFromStore extends React.Component<Props> {

    constructor(props: Props) {
        super(props);
        console.log(props);
    }

    handleIncrement = (): void => {
        this.props.dispatch({ type: ActionType.Increment, delta: 1 });
    };

    handleDecrement = (): void => {
        this.props.dispatch({ type: ActionType.Decrement, delta: 1 });
    };

    render(): React.ReactNode {
        const { value } = this.props.counter;
        return (
            <div className="counter">
                <div className="counter__button" onClick={this.handleDecrement}>-</div>
                <div className="counter__value">{value}</div>
                <div className="counter__button" onClick={this.handleIncrement}>+</div>

                {/*language=SCSS*/}
                <style jsx>{`
                    .counter {
                        display: inline-flex;
                        flex-flow: row nowrap;
                        align-items: center;
                        padding: 1rem;
                        background: lightgray;
                    }

                    .counter__button {
                        padding: .5rem;
                        background: blue;
                        color: white;
                        border-radius: 5px;
                    }

                    .counter__value {
                        padding: .5rem;
                    }

                    .counter__button:hover {
                        background: darkblue;
                    }

                    .counter__button:active {
                        background: darkblue;
                    }
                `}</style>
            </div>
        );
    }
}

export default connect(state => state)(CounterFromStore);
