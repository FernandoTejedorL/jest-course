const UserList = ({ users }) => {
  const renderedUsers = users.map((item) => {
    return (
      <tr key={item.name}>
        <td>{item.name}</td>
        <td>{item.email}</td>
      </tr>
    );
  });
  return (
    <table>
      <thead>
        <tr>
          <th>NAME</th>
          <th>EMAIL</th>
        </tr>
      </thead>
      <tbody>{renderedUsers}</tbody>
    </table>
  );
};

export default UserList;
