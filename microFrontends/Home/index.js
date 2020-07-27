import React from 'react';
import ReactDOM from 'react-dom';
import reactToWebComponent from 'react-to-webcomponent';
import { HomeStyled, LabelBlue } from './styles';

class Home extends React.Component {

    render() {
        return (
            <HomeStyled>
                <h1>Micro Frontends Demo</h1>
                <h2>Web Components</h2>
                <span>Welcome to Micro Frontends Demo with Web Components in ReactJs</span>
                <div>
                    <a type="button" className="button button--btn-white" href="/items-list"><LabelBlue>Go to Items List</LabelBlue></a>
                    <a type="button" className="button button--btn-white"  href="/new-item"><LabelBlue>Create new Item</LabelBlue></a>
                </div>
            </HomeStyled>
        )
    }
}


customElements.define(
    "micro-fe-home",
    reactToWebComponent(Home, React, ReactDOM)
);