import React, { Component } from "react";

export default class Posts extends Component {
  state = {
    posts: [],
  };

  async componentDidMount() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    this.setState({ posts: data });
  }

  render() {
    return (
      <div>
        <h1>Posts:</h1>
        {
            this.state.posts.map(posts => {
                return <div key={posts.id}>
                    <h2>{posts.title}</h2>
                    <p>{posts.body}</p>
                </div>
            })
        }
      </div>
    );
  }
}
