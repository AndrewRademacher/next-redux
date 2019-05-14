import * as React from 'react';
import { connect } from 'react-redux';
import { ActionType, CounterStore } from '../../store';

export interface Props {
    // counter: CounterStore
    // dispatch: any
    value: number
    onIncrement: () => void
    onDecrement: () => void
}

interface State {
    value: number
}

export class CounterFromStore extends React.Component<Props> {

    // handleIncrement = (): void => {
    //     this.props.dispatch({ type: ActionType.Increment, delta: 1 });
    // };
    //
    // handleDecrement = (): void => {
    //     this.props.dispatch({ type: ActionType.Decrement, delta: 1 });
    // };

    render(): React.ReactNode {
        const { value, onIncrement, onDecrement } = this.props;
        return (
            <div className="counter">
                <div className="counter__button" onClick={onDecrement}>-</div>
                <div className="counter__value">{value}</div>
                <div className="counter__button" onClick={onIncrement}>+</div>

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

// export default connect(state => state)(_CounterFromStore);
// export const CounterFromStore = connect(state => state)(_CounterFromStore);
