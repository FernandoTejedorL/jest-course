import { useState } from 'react';

const UserForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  return (
    <form action="" onSubmit={(event) => handleSubmit(event, name, email)}>
      <div>
        <label htmlFor="">Name</label>
        <input type="text" onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label htmlFor="">Email</label>
        <input type="email" onChange={(e) => setEmail(e.target.value)} />
      </div>
      <input type="submit" value="Add user" />
    </form>
  );
};

const handleSubmit = (event, name, email) => {
  event.preventDefault();
  console.log(name, email);
};

export default UserForm;
