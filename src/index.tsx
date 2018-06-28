import * as React from "react";
import * as ReactDOM from "react-dom";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import '../src/app.scss';
import {Homepage} from "./Homepage";


export default class App extends React.Component<any,any> {
    render(){
        return (<div>
            <Router>
                <Route exact path='/'
                       render={props => <Homepage {...props}/>} />
                {/*<Route exact path="(/)/">*/}
                {/*</Route>*/}
            </Router>
        </div>)
    }
}

let home = document.getElementById("app");

ReactDOM.render(<App />, home);