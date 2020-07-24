import React from 'react'

class ListItem extends React.Component {
    render() {
        const { item, fields } = this.props
        return (
            <li>
                {fields.map((field, index) => (
                    <div key={index}>
                        { field === 'link' ? 
                            <a href={item[field]}>{item[field]}</a>
                            :
                            <span name={field}>{item[field]}</span>
                        }
                    </div>
                ))}
                <a href={`/${item.id}/item-view`}>View</a>
            </li>

        )
    }
}

export default ListItem