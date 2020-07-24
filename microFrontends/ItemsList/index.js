import React from 'react';
import ReactDOM from 'react-dom';
import reactToWebComponent from 'react-to-webcomponent';
import PropTypes from 'prop-types';

import ListItem from '../../components/ListItem';

class ItemsList extends React.Component {

    render() {
        const { items, fields } = this.props
        console.log(fields)
        return (
            <div>
                <ul>
                    { JSON.parse(items).map(item => (
                    <ListItem 
                        key={item.id} 
                        item={item} 
                        fields={JSON.parse(fields)}
                    />
                    )) }
                </ul>
            </div>
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