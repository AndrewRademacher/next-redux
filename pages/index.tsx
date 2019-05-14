import * as React from 'react';
import { connect } from 'react-redux';
import { ActionType, CounterStore } from '../store';
import { Counter } from '../components/counter';
import { CounterFromStore } from '../components/counter-from-store';

interface Props {
    counter: CounterStore
}

class IndexPage extends React.Component<Props> {

    render(): React.ReactNode {
        // @ts-ignore
        const { dispatch } = this.props;
        const { counter } = this.props;
        return (
            <>
                <h1>Counters of Different State</h1>
                <div>
                    <Counter initialValue={this.props.counter.value}/>
                </div>
                <div>
                    <Counter initialValue={this.props.counter.value}/>
                </div>


                <h1>Counters of Same State</h1>
                <div>
                    <CounterFromStore value={counter.value}
                                      onIncrement={() => dispatch({ type: ActionType.Increment, delta: 1 })}
                                      onDecrement={() => dispatch({ type: ActionType.Decrement, delta: 1 })}/>
                </div>
                <div>
                    <CounterFromStore value={counter.value}
                                      onIncrement={() => dispatch({ type: ActionType.Increment, delta: 1 })}
                                      onDecrement={() => dispatch({ type: ActionType.Decrement, delta: 1 })}/>
                </div>
            </>
        );
    }
}

export default connect(state => state)(IndexPage);
