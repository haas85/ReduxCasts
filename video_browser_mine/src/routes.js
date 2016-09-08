import React, {Component} from 'react';
import { Route, IndexRoute, Link } from 'react-router';

import App from './components/app';

class GreetLink extends Component {
    render(){
        return (<div><br/><Link to="greet">Link in index route got to greet</Link></div>)
    }
}

//No need of constructor if it is not overwritten
class Greet1 extends Component {
    render(){
        return (
            <div>
                Hello, Greet index
                {this.props.children}
            </div>)
    }
}

class Greet2 extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
                Inside greet
                {this.props.children} <br/>
                <Link to="greet/child">OpenChild</Link>
            </div>);
    }
}

class Greet3 extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return (<div>Last Child <br/> <Link to="/">Link to main</Link></div>)
    }
}

export default (
    <Route path="/" component={App}>
        <IndexRoute component={GreetLink} />
        <Route path="greet" component={Greet1}>
            <IndexRoute component={Greet2} />
            <Route path="child" component={Greet3} />
        </Route>
    </Route>
);