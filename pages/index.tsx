import * as React from 'react';
import { Counter } from '../components/counter';

const IndexPage = () => (
    <>
        <h1>Counters of Same State</h1>
        <div>
            <Counter/>
        </div>
        <div>
            <Counter/>
        </div>
    </>
);

export default IndexPage;
