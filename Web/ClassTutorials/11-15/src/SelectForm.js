import React from "react";

export default class SelectForm extends React.Component {
    constructor(props){
        super(props)

        this.state = {value: "charlie"};

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event){
        const value = event.target.value
        this.setState({value:value})
    }

    handleSubmit(event){
        console.log(`Value is ${this.state.value}!`);
        event.preventDefault();
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label htmlFor= "name">Name:</label>
                <select id ="name" value = {this.state.value} onChange = {this.handleChange}>
                    <option value="george">George</option>
                    <option value="harambe">Harambe</option>
                    <option value="charlie">Charlie</option>
                    <option value="ghandi">Ghandi</option>
                </select>
                <input type = "submit"/>
            </form>
        )
    }
}