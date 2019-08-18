import React, { Component } from 'react';

class ArticleAdd extends Component {
  constructor() {
    super();
    this.state = { title: '', content: '' }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    fetch('api/articles', {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => response.json())
      .then(date => {
        this.props.history.push(`articles/${data.id}`);
      })
      .catch(error => console.log('error', error));
  }

  handleChange(e) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleCancel() {
    props.history.push("/articles");
  }

  render() {
    return(
      <div>
        <h1>Create Article Post</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="">
            <label>
              Content
            </label>
            <input type="text" name="title" value={ this.state.title } onChange={ this.handleChange } className="" />
          </div>
          <div className="">
            <label>
              Content
            </label>
            <textarea name="content" rows="5" value={ this.state.content } onChange={ this.handleChange } className="" />
          </div>
          <div className="">
            <button type="submit" className="">
              Create
            </button>
            <button type="button" onClick={ this.handleCancel } className="">
              Cancel
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default ArticleAdd;
