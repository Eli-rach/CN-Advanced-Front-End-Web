import React from 'react';

export default class Title extends React.Component {
    constructor(props){
        super();
        this.name = props.name;
    
    }

    render() {
        const styles = {
            fontSize: '2em',
            color: 'lightblue'
          }
        return(
            <h1  style={styles}>Hello {this.name}</h1>
        );
    }
}
