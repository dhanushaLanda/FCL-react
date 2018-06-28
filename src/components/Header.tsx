import * as React from 'react';
import * as ReactDOM from 'react-dom';
import '../app.scss';


 export class Header extends React.Component<{title: string}> {
    constructor(props) {
        super(props);
    }
    render(){
        return <div  className="header-title">
            <span >{this.props.title}</span>
            <hr/>
        </div>
    }
}
// const Header = (title) => (
//     return 
//         <p className="header-title">{title}</p>
//         <hr/>
//         <nav className="navbar" role="navigation" aria-label="main navigation">
//             <div className="navbar-brand">
//                 <a className="navbar-item" href="/">
//                 </a>
//             </div>
//         </nav>
// )

