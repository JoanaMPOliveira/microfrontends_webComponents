import React from 'react';
import ReactDOM from 'react-dom';
import reactToWebComponent from 'react-to-webcomponent';
import PropTypes from 'prop-types';

import { ItemViewStyled, ItemFieldStyled, ItemLinkStyled } from './styles';


class ItemView extends React.Component {

    render() {
        const { items } = this.props
        const pathnameElems = window.location.pathname.split('/')
        const id = pathnameElems[pathnameElems.length - 2]
        const item = JSON.parse(items).filter(item => item.id == id)[0]
        return (
            <ItemViewStyled>
                {Object.keys(item).map(key => (
                <ItemFieldStyled>
                    {key == 'link' ?
                    <ItemLinkStyled href={item[key]}>{item[key]}</ItemLinkStyled>
                    :
                    <span name={key}>{item[key]}</span>
                    }
                </ItemFieldStyled>
                ))}
            </ItemViewStyled>

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