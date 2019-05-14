import * as React from 'react';

export interface Props {
    initialValue?: number
}

interface State {
    value: number
}

export class CounterFromStore extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            value: props.initialValue || 0,
        };
    }

    handleIncrement = (): void => {
        this.setState(state => {
            return {
                value: state.value + 1,
            };
        });
    };

    handleDecrement = (): void => {
        this.setState(state => {
            return {
                value: state.value - 1,
            };
        });
    };

    render(): React.ReactNode {
        const { value } = this.state;
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
