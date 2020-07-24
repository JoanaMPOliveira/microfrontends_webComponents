import React from 'react';
import ReactDOM from 'react-dom';
import reactToWebComponent from 'react-to-webcomponent';
import PropTypes from 'prop-types';
import NewForm from '../../components/NewForm';

class NewItem extends React.Component {

    render() {
        const { items } = this.props

        const itemObj = JSON.parse(items)[0]

        return (
            <div>
                <NewForm item={itemObj} />
            </div>
        )
    }
}
NewItem.propTypes = {
    items: PropTypes.string,
}

customElements.define(
    "micro-fe-new-item",
    reactToWebComponent(NewItem, React, ReactDOM)
);