import { useState } from 'react';

const UserForm = ({ onUserAdd }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  return (
    <form
      action=""
      onSubmit={(event) => handleSubmit(event, onUserAdd, name, email)}
    >
      <div>
        <label htmlFor="">Name</label>
        <input type="text" onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label htmlFor="">Email</label>
        <input type="email" onChange={(e) => setEmail(e.target.value)} />
      </div>
      <button>Add User</button>
    </form>
  );
};

const handleSubmit = (event, onUserAdd, name, email) => {
  event.preventDefault();
  onUserAdd({ name, email });
};

export default UserForm;
