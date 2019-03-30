import React from "react"
import { connect } from "react-redux"

/*
    With mapStateToProps we can extract the parts we need from
    the 'global' state and make them available through this.props
*/

const mapStateToProps = state => {

    // Extracting just articles from the state
    return { articles: state.articles }
}

class ConnectedList{

    render(){
        <ul className="list-group list-group-flush">
            {this.props.articles.map(el => (
                <li className="list-group-item" key={el.id}>
                    {el.title}
                </li>
            ))}
        </ul>
    }
    
}

const List = connect(mapStateToProps)(ConnectedList)

export default List;