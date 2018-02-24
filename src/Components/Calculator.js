import React, {Component} from 'react';

import CalculatorButton from './CalculatorButton';
import CalculatorInput from './CalculatorInput';

class Calculator extends Component {
    state = {
        addResult: 0,
        subtractResult: 0,
        n: 2
    };

    addHandler = () => {
        this.setState((prevState, props) => ({
            addResult: prevState.addResult + prevState.n
        }))
    };

    subtractHandler = () => {
        this.setState((prevState, props) => ({
            subtractResult: prevState.subtractResult + prevState.n
        }))
    };

    changeNHandler = event => {
        this.setState({
            n: parseInt(event.target.value, 10)
        })
    };

    render(){
        return (
            <div style={{'border': '1px solid black', 'width': '336px', 'margin': '15px', 'padding': '15px'}}>
                <p>{this.state.addResult - this.state.subtractResult}</p>
                <div style={{'display': 'flex', 'flexWrap': 'wrap'}}>
                    <CalculatorButton
                        value={this.state.addResult}
                        clickHandler={this.addHandler}
                        buttonLabel='+'
                    />
                    <CalculatorButton
                        value={this.state.subtractResult}
                        clickHandler={this.subtractHandler}
                        buttonLabel='-'
                    />
                    <CalculatorInput
                        value={this.state.n}
                        changeHandler={this.changeNHandler}
                    />
                </div>
            </div>
        )
    }
}

export default Calculator;