import React, { Component } from "react"
import { connect } from "react-redux"
import uuidv1 from "uuid"
import { addArticle } from "../actions/index"

function mapDispatchToProps(dispatch) {
    return {
        
        addArticle: article => dispatch(addArticle(article))
        /*
            addArticle: function(article){
                rootReducer({type: ADD_ARTICLE, article})
            }

            addArticle is now part of this.props. When it is called
            inside handleSubmit() the rootReducer is triggered through 'dispatch'.
            
            {type: ADD_ARTICLE, article} is what the function addArticle(article)
            returns.

            In this way addArticle can be accessed via this.props.
        */
    };
}

const mapStateToProps = state => {

    // Extracting just message from the state
    return { message: state.message }
}

class ConnectedForm extends Component {
  
    constructor() {
        super();
        this.state = {
            title: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
        this.setState({ [event.target.id]: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        const title = this.state.title;
        const id = uuidv1();
        this.props.addArticle({ title, id });
        this.setState({ title: "" });
    }

  render() {
    const { title } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={this.handleChange}
          />
        </div>
        <p>{this.props.message}</p>
        <button type="submit" className="btn btn-success btn-lg">
          SAVE
        </button>
      </form>
    );
  }
}

/*
    When ther is no mapStateToProps function declared we must pass null
    as the first parameter.
*/
const Form = connect(mapStateToProps, mapDispatchToProps)(ConnectedForm);

export default Form;