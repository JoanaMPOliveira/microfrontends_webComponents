import React from 'react';
import ReactDOM from 'react-dom';
import reactToWebComponent from 'react-to-webcomponent';
import PropTypes from 'prop-types';


class ItemView extends React.Component {

    render() {
        const { items } = this.props
        const pathnameElems = window.location.pathname.split('/')
        const id = pathnameElems[pathnameElems.length - 2]
        const item = JSON.parse(items).filter(item => item.id == id)[0]
        return (
            <div>
                {Object.keys(item).map(key => (
                <div>
                    {key == 'link' ?
                    <a href={item[key]}>{item[key]}</a>
                    :
                    <span name={key}>{item[key]}</span>
                    }
                </div>
                ))}
            </div>

        )
    }
}
ItemView.propTypes = {
    items: PropTypes.string,
}

customElements.define(
    "micro-fe-item-view",
    reactToWebComponent(ItemView, React, ReactDOM)
);