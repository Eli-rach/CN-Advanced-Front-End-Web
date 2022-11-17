import React from "react";

export default class Form extends React.Component {
    constructor(props){
        super(props)

        this.state = {value: "Charlie"};

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
                <input id ="name" type = "text" value = {this.state.value} onChange = {this.handleChange}/>
                <input type = "submit"/>
            </form>
        )
    }
}