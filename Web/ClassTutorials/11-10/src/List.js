import React from "react"

export default class List extends React.Component{
    render(){
        const numbers = [1, 2, 3, 4, 7]
        const listItems = numbers.map((number)=>{
            return<li>{number}</li>
        })
        return(
            <ul>
                {listItems}
            </ul>
        )
    }
    
}