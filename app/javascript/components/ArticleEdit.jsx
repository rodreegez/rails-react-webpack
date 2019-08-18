import React, { Component } from 'react';

class ArticleEdit extends Component {
  constructor() {
    super();
    this.state = { title: '', content: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  componentDidMount() {
    fetch(`api/articles/${this.props.match.params.id}`)
      .then(response => response.json())
      .then((data) => {
        this.setState(data);
      })
      .catch(error => console.log('error', error));
  }

  handleSubmit(e) {
    e.preventDefault();
    fetch(`api/articles/${this.props.match.params.id}`, {
        method: 'PATCH',
        body: JSON.stringify(this.state),   
        headers: { 'Content-Type': 'application/json' }
      })
      .then(response => response.json())
      .then(data => {
        this.props.history.push(`/articles/${this.state.id}`);
      })
      .catch(error => console.log('error', error));
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleCancel() {
    this.props.history.push(`/articles/${this.state.id}`);
  }

  render() {
    return (
      <div>
        <h1>Edit {this.state.title}</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="">
            <label>Title</label>
            <input type="text" name="title" value={this.state.title} onChange={this.handleChange} className="" />
          </div>
          <div className="">
            <label>Content</label>
            <textarea name="content" rows="5" value={this.state.content} onChange={this.handleChange} className="" />
          </div>
          <div className="">
            <button type="submit" className="">Update</button>
            <button type="button" onClick={this.handleCancel} className="">Cancel</button>
          </div>
        </form>
      </div>
    );
  }
}

export default ArticleEdit;
