import React, { Component } from "react"
import { connect } from "react-redux"
import { getData } from "../actions/index"

function mapStateToProps(state) {
    return {
        articles: state.remoteArticles.slice(0, 10)
    }
}

export class Post extends Component {
    constructor() {
        super()
    }
    componentDidMount() {
        this.props.getData()
    }
    render() {
        return (
            <ul className="list-group list-group-flush">
                {this.props.articles.map(el => (
                    <li className="list-group-item" key={el.id}>
                        {el.title}
                    </li>
                ))}
            </ul>
        )
    }
}

export default connect(
  mapStateToProps,
  { getData }
)(Post)