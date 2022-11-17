import React from 'react'

export default class Welcome extends React.Component{
    render(){
        let title;
        if (this.props.name){
            title=<h1>Hello {this.props.name}!</h1>
        
        } else{
            title = <h1>Hello Stranger!</h1>
        }
        return(title)
    }
}