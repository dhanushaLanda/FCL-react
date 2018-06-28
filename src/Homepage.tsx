import * as React from 'react';
import { Header }  from './components/Header';

export class Homepage extends React.Component<any>{
    constructor(props){
        super(props);
    }
    render() {
        return <div>

            <Header title="FlowerCatelog"/>
            <div className="container">
            <img className="home-flower" src={require("../images/freshorigins.jpg")} alt="flowercatelog"/>

            </div>
        </div>
    }
}