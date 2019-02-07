import React, { Component } from "react";
import axios from "axios";

class ListPage extends Component {
  state = {
    users: []
  };

  componentDidMount() {
    this.getList();
  }

  getList() {
    axios({
      method: "GET",
      url: "/api/list"
    })
      .then(response => {
        this.setState({
          users: response.data
        });
      })
      .catch(error => {
        alert("Unable to get from server");
      });
  }
  render() {
    return (
      <div>
      {JSON.stringify(this.state)}
        <ul>
          {this.state.users.map(user => (
            <li>User: {user.username}</li>
          ))}
        </ul>
      </div>
    );
  }
}
export default ListPage;
