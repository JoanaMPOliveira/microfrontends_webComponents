import React from 'react';
import ReactDOM from 'react-dom';
import reactToWebComponent from 'react-to-webcomponent';
import PropTypes from 'prop-types';

import { ItemsListStyled, ItemsListHeaderStyled, ButtonHeader } from './styles'

import ListItem from '../../components/ListItem';

class ItemsList extends React.Component {

    render() {
        const { items, fields } = this.props
        const blockWidth = '80%'
        return (
            <ItemsListStyled width={ blockWidth }>
                <ItemsListHeaderStyled>
                    {JSON.parse(fields).map((field, index) => (
                        <span key={index}>{field}</span>
                    ))}
                    <ButtonHeader></ButtonHeader>
                </ItemsListHeaderStyled>
                { JSON.parse(items).map(item => (
                <ListItem 
                    key={item.id} 
                    item={item} 
                    fields={JSON.parse(fields)}
                />
                )) }
            </ItemsListStyled>
        )
    }
}
ItemsList.propTypes = {
    items: PropTypes.string,
    fields: PropTypes.string
}

customElements.define(
    "micro-fe-items-list",
    reactToWebComponent(ItemsList, React, ReactDOM)
);