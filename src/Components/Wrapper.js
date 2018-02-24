import React, {Component} from 'react';

class Wrapper extends Component {
    render(){
        let colorNumber = -1;

        let newChildren = this.props.children.map(elem => {
            colorNumber = colorNumber + 5;
            const red = Math.min(colorNumber, 255);
            const green = Math.min(Math.max(colorNumber-255, 0), 255);
            const blue = Math.min(Math.max(colorNumber-510, 0), 255);

            return (
                <div key={colorNumber} style={{'backgroundColor': 'rgb('+red+', '+green+', '+blue+')', 'border': '1px solid black', 'width': '100px', 'margin': '15px'}}>
                    {elem}
                </div>
            )
        });

        return (
            <div style={{'display': 'flex', 'flexWrap': 'wrap'}}>
                {newChildren}
            </div>
        )
    }
}

export default Wrapper;