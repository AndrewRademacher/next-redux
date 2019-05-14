import { combineReducers } from 'redux';

export enum ActionType {
    Increment,
    Decrement,
    Reset
}

export type Action = {
    type: ActionType.Increment
    delta: number
} | {
    type: ActionType.Decrement
    delta: number
} | {
    type: ActionType.Reset
}

export namespace Store {

    export type Counter = { value: number }

    export type All = {
        counter: Counter
    }
}

const initCounter: Store.Counter = {
    value: 0,
};

function counter(state: Store.Counter = initCounter, action: Action): Store.Counter {
    const { value } = state;
    switch (action.type) {
        case ActionType.Increment:
            return { ...state, value: state.value + action.delta };
        case ActionType.Decrement:
            return { ...state, value: state.value + action.delta };
        case ActionType.Reset:
            return initCounter;
        default:
            return state;
    }
}

export const reducers = combineReducers<Store.All>({
    counter,
});

export const initState: Store.All = {
    counter: initCounter,
};
