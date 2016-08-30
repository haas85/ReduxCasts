import React, {Component} from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';

class Greet1 extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return (<div>Hello</div>)
    }
}

class Greet2 extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return (<div>Hello2</div>)
    }
}

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Greet1} />
        <Route path="greet" component={Greet2} />
    </Route>
);