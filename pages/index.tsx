import * as React from 'react';
import { connect } from 'react-redux';
import { CounterStore } from '../store';
import { Counter } from '../components/counter';

interface Props {
    counter: CounterStore
}

class IndexPage extends React.Component<Props> {

    render(): React.ReactNode {
        return (
            <>
                <h1>Counters of Same State</h1>
                <div>
                    <Counter initialValue={this.props.counter.value}/>
                </div>
                <div>
                    <Counter initialValue={this.props.counter.value}/>
                </div>
            </>
        );
    }
}

export default connect(state => state)(IndexPage);
