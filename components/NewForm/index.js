import React from 'react';
import { v4 as uuidv4 } from 'uuid';


class NewForm extends React.Component {
    handleSubmit = (event) => {
        console.log(this.state)
        alert(`Item: \n ${
            Object.keys(this.state).map(key => `${key}: ${this.state[key]}\n`)
        } was successfuly submited`)
    }

    handleChange = (event) => {
        console.log(event.target.name, event.target.value)
        this.setState({
            id: uuidv4(),
            [event.target.name]: event.target.value
        })
    }

    render() {
        const { item } = this.props

        return(
            <form onSubmit={this.handleSubmit}>
                {Object.keys(item).map((field, index) => (
                    field !== 'id' &&
                    <label key={index}>
                        {field}: 
                        {field === 'description' ?
                        <textarea rows="10" type="text" name={field} onChange={this.handleChange} />
                        :
                        <input type="text" name={field} onChange={this.handleChange} />
                        }
                    </label>
                ))}
                <input type="submit" value="Submit" />
            </form>
        )
    }
}

export default NewForm;