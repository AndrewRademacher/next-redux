import * as React from 'react';
import { connect } from 'react-redux';
import { CounterStore } from '../store';
import { Counter } from '../components/counter';
// import { CounterFromStore } from '../components/counter-from-store';
import CounterFromStore from '../components/counter-from-store';

interface Props {
    counter: CounterStore
}

class IndexPage extends React.Component<Props> {

    render(): React.ReactNode {
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
                    <CounterFromStore/>
                </div>
                <div>
                    <CounterFromStore/>
                </div>
            </>
        );
    }
}

export default connect(state => state)(IndexPage);
