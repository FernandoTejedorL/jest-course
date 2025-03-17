import { useState } from 'react';
import './App.css';
import UserForm from './components/userForm/UserForm';
import UserList from './components/userList/UserList';

function App() {
  const [users, setUsers] = useState([]);
  console.log(users);

  const onUserAdd = (user) => {
    setUsers([...users, user]);
  };

  return (
    <div>
      <UserForm onUserAdd={onUserAdd} />
      <hr />
      <UserList users={users} />
    </div>
  );
}

export default App;
