import { render, screen, within } from '@testing-library/react';
import UserList from './UserList';

const renderComponent = () => {
  const users = [
    { name: 'Jane', email: 'jane@jane.com' },
    { name: 'Sam', email: 'sam@sam.com' },
  ];
  render(<UserList users={users} />);

  return {
    users,
  };
};

test('render one row per user', () => {
  //To open the screen to find what component to check --> screen.logTestingPlaygroundURL();
  renderComponent();

  //Adding a data-testId to the component code
  const rows = within(screen.getByTestId('users')).getAllByRole('row');

  //   //With container so no code added on the component
  //   const { container } = render(<UserList users={users} />);

  //   // eslint-disable-next-line
  //   const rows = container.querySelectorAll('tbody tr');

  expect(rows).toHaveLength(2);
});

test('render the name and email for each user', () => {
  const { users } = renderComponent();

  for (let user of users) {
    const name = screen.getByRole('cell', { name: user.name });
    const email = screen.getByRole('cell', { name: user.email });

    expect(name).toBeInTheDocument();
    expect(email).toBeInTheDocument();
  }
});
