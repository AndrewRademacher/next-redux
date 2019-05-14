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

// export namespace Store {

export type CounterStore = { value: number }

export type All = {
    counter: CounterStore
}

// }

const initCounter: CounterStore = {
    value: 1,
};

function counter(state: CounterStore = initCounter, action: Action): CounterStore {
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

export const reducers = combineReducers<All>({
    counter,
});

export const initState: All = {
    counter: initCounter,
};
