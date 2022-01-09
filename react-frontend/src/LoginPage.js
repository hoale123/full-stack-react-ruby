import { useState } from "react";
import { useHistory } from "react-router-dom";

import { Form, Button, Header } from "semantic-ui-react";
const axios = require('axios');

function LogInPage({ setUser, user }){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const history = useHistory();
    

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post(`${process.env.REACT_APP_API_URL}/login`, {
            email: email,
            password: password
        }, {withCredentials: true})
        .then(function (response) {
            if(response.data.error){
                alert(response.data.error)
            }
            else{
                setUser(response.data)
                history.push("/");
            }
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    {
        return (
            <div id = 'login-form-wrapper' style={{width:'40%' , float:'left'}}>
                <Form onSubmit={handleSubmit} floated='right'>
                    <Form.Field>
                    <Header as="h2">Login or Register</Header>
                    <label>
                        Email:
                        <input
                        name="email"
                        type="email"
                        placeholder="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required />
                    </label>
                    <br/>

                    <label>
                        Password:
                        <input
                        name="password"
                        type="password"
                        placeholder='password'
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required />
                    </label>

                    <Button>Submit</Button>
                    </Form.Field>
                </Form>
            </div>
        )
    }
}

export default LogInPage;