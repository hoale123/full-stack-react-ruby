import { useState } from "react";
import { Redirect } from "react-router-dom";
import { Button, Form } from 'semantic-ui-react'

const axios = require("axios");

export default function Register({ setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState('')
  const [successfullyRegistered, setSuccessfullyRegistered] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`${process.env.REACT_APP_API_URL}/register`, {
        name: name,
        email: email,
        password: password,
        avatar: avatar,
      },{withCredentials: true})
      .then(function (response) {
        if (response.data.error) {
          alert(response.data.error);
        } else {
          // console.log(response);
          setUser(response.data);
          setSuccessfullyRegistered(true);
        }
      })
      .catch(function (error) {
        // console.log(error);
      });
  };
  if (successfullyRegistered) {
    return <Redirect to="/" />;
  } else {
    return (
      <div style={{width:'40%' , float:'left'}} >


      <Form floated='right' onSubmit={handleSubmit}>
        <Form.Field >
          <h1>Register</h1>
          <label>
            First Name:
            <input
              name="firstName"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="First Name"
            />
          </label>

          <label>
            Email:
            <input
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
            />
          </label>

          <label>
            Password:
            <input
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
          </label>

          <label>
            Avatar URL:
            <input
              name="avatar"
              type="text"
              value={avatar}
              onChange={(e) => setAvatar(e.target.value)}
              placeholder="Avatar"
            />
          </label>

          <Button>Submit</Button>
        </Form.Field>
      </Form>
      </div>
    );
  }
}
