import * as React from 'react';
import App, { Container } from 'next/app';
import { Provider } from 'react-redux';
import { initState, reducers } from '../store';
import { createStore } from 'redux';
import withRedux from 'next-redux-wrapper';

class MyApp extends App {

    render() {
        // @ts-ignore
        const { Component, pageProps, store } = this.props;
        return (
            <Container>
                <Provider store={store}>
                    <Component {...pageProps}/>
                </Provider>
            </Container>
        );
    }
}

const makeStore = (initState, options) => {
    return createStore(reducers, initState);
};

export default withRedux(makeStore)(MyApp);
