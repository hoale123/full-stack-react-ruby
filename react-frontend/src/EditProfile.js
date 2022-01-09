import { useState, useEffect } from "react";
import { Form, Button } from "semantic-ui-react";
function EditProfile({ user, setUser }) {
  const [avatar, setAvatar] = useState();
  useEffect(() => {
    setAvatar(user ? user.avatar : "https://i.stack.imgur.com/y9DpT.jpg")
  }, [user]);

  function handleSubmit(e) {
    e.preventDefault();
    
    fetch(`http://localhost:9292/update-avatar/${user.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        avatar: avatar,
      }),
    })
      .then((r) => r.json())
      .then((user) => setUser(user));
  }
  //const handleSubmit = (e) => e.preventDefault
  
  return (
    <div className="ui container center aligned" style={{ width: '40%', display: 'flex', marginTop: '5%'}}>
      <Form onSubmit={handleSubmit}  >
        <Form.Field >
        <h3 style={{ textAlign: "center" }}>Edit Avatar</h3>
        <img alt={"avatar"} src={user? user.avatar : user} style={{marginTop:"0px"}}/>
          <label>
            Update Avatar:
            <input
              name="avatar"
              type="text"
              value={avatar}
              onChange={(e) => setAvatar(e.target.value)}
              placeholder="Avatar"
            />
          </label>
        </Form.Field>
        <Button>Submit</Button>
      </Form>
    </div>
  );
}

export default EditProfile;
