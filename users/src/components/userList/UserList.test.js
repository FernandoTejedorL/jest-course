import { render } from '@testing-library/react';
import UserList from './UserList';

test('render one row per user', () => {
  const users = [
    { name: 'Jane', email: 'jane@jane.com' },
    { name: 'Sam', email: 'sam@sam.com' },
  ];

  //To open the screen to find what component to check --> screen.logTestingPlaygroundURL();

  //   //Adding a data-testId to the component code (not the best way...)
  //   render(<UserList users={users} />);
  //   const rows = within(screen.getByTestId('users')).getAllByRole('row');

  //With container so no code added on the component
  const { container } = render(<UserList users={users} />);

  // eslint-disable-next-line
  const rows = container.querySelectorAll('tbody tr');

  expect(rows).toHaveLength(2);
});

test('render the name and email for each user', () => {});
