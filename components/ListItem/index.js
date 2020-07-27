import React from 'react'
import { ListItemStyled, ItemButtonStyled, ItemColumnStyled } from './styles'

class ListItem extends React.Component {
    render() {
        const { item, fields } = this.props
        return (
            <ListItemStyled>
                {fields.map((field, index) => (
                    <ItemColumnStyled key={index}>
                        { field === 'link' ? 
                            <a href={item[field]}>{item[field]}</a>
                            :
                            <span name={field}>{item[field]}</span>
                        }
                    </ItemColumnStyled>
                ))}
                <ItemButtonStyled href={`/${item.id}/item-view`}>View</ItemButtonStyled>
            </ListItemStyled>

        )
    }
}

export default ListItem