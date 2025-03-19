import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import UserForm from './UserForm';

test('It shows two inputs and a button', () => {
  render(<UserForm />);

  const inputs = screen.getAllByRole('textbox');
  const button = screen.getByRole('button');

  expect(inputs).toHaveLength(2);
  expect(button).toBeInTheDocument();
});

test('it calls onUserAdd when the form is submitted', () => {
  const mock = jest.fn();

  //render the component
  render(<UserForm onUserAdd={mock} />);

  //find the inputs
  const nameInput = screen.getByRole('textbox', { name: /name/i });
  const emailInput = screen.getByRole('textbox', { name: /email/i });

  //simulate writing a name
  user.click(nameInput);
  user.keyboard('Janice');

  //simulate writing an email
  user.click(emailInput);
  user.keyboard('jane@jane.com');

  //find the button
  const button = screen.getByRole('button');

  //simulate clicking the button
  user.click(button);

  expect(mock).toHaveBeenCalled();
  expect(mock).toHaveBeenCalledWith({ name: 'Janice', email: 'jane@jane.com' });
});
