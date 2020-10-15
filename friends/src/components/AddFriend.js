
import React from "react";
import { axiosWithAuth } from "../util/axiosWithAuth";

class AddFriend extends React.Component {
  state = {
    friends: {
        id: "",
        name: "",
        email:"",
        age:"",
        }
    
  };

  

  handleChange = (e) => {
    this.setState({
      friends: {
        ...this.state.friends,
        [e.target.name]: e.target.value
      }
    });
  };

  login = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("/friends", this.state.friends)
      .then((res) => {
         console.log(res)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.login}>
          <input
            type="text"
            name="name"
            value={this.state.friends.username}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="email"
            value={this.state.friends.email}
            onChange={this.handleChange}
          />
           <input
            type="text"
            name="age"
            value={this.state.friends.age}
            onChange={this.handleChange}
          />
          <button>Submit Friend</button>
        </form>
      </div>
    );
  }
}

export default AddFriend;
