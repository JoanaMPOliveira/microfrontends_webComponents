import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import { FormStyled, FormGroupStyled, ButtonInput } from './styles'

class NewForm extends React.Component {
    handleSubmit = (event) => {
        alert(`Item: \n ${
            Object.keys(this.state).map(key => `${key}: ${this.state[key]}\n`)
        } was successfuly submited`)
    }

    handleChange = (event) => {
        this.setState({
            id: uuidv4(),
            [event.target.name]: event.target.value
        })
    }

    render() {
        const { item } = this.props

        return(
            <FormStyled onSubmit={this.handleSubmit}>
                {Object.keys(item).map((field, index) => (
                    field !== 'id' &&
                    <FormGroupStyled>
                        <label key={index}>
                            {field}: 
                        </label> 
                        {
                            field === 'description' ?
                        <textarea rows="10" type="text" name={field} onChange={this.handleChange} />
                        :
                        <input type="text" name={field} onChange={this.handleChange} />
                        }
                    </FormGroupStyled>
        
                ))}
                <ButtonInput type="submit" value="Submit" />
            </FormStyled>
        )
    }
}

export default NewForm;