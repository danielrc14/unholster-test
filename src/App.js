import React, { Component } from 'react';
import './App.css';
import {Route, Link} from 'react-router-dom';

import Wrapper from './Components/Wrapper';
import Calculator from './Components/Calculator';

class App extends Component {

    isCicle = (str, test) => {
        if(test.length !== str.length){
            console.log('false');
            return false;
        }
        let iterateStr = test;

        for(let i=0; i < test.length; i++){
            console.log(str, iterateStr);
            if(str === iterateStr){
                console.log('true');
                return true;
            }
            iterateStr = iterateStr.substring(iterateStr.length - 1, iterateStr.length) + iterateStr.substring(0, iterateStr.length - 1)
        }

        console.log('false');
        return false;
    };

    render() {
        let elems = [];
        for(let i=0; i<100; i++){
            elems.push((
                <p key={i}>{i}</p>
            ))
        }

        return (
            <div>
                <div>
                    <Link to='/wrapper' style={{'margin': '15px'}}>Wrapper</Link>
                    <Link to='/calculator'>Calculator</Link>
                </div>
                <Route path='/wrapper' render={(props) => (<Wrapper>{elems}</Wrapper>)}/>
                <Route path='/calculator' component={Calculator}/>
            </div>
        );
    }
}

export default App;
